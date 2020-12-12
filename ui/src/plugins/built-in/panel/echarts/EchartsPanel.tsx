import React, { useRef, useState, useEffect } from 'react';
import { PanelProps, DatavTheme, getHistory, getTemplateSrv } from 'src/packages/datav-core/src';
import { withTheme } from 'src/packages/datav-core/src';
import { debounce } from 'lodash';
import echarts from 'echarts';
import { css, cx } from 'emotion';
import { EchartsOptions, funcParams } from './types';
import { join, indexOf,cloneDeep, isArray} from 'lodash';
import { resetDashboardVariables } from 'src/views/dashboard/model/initDashboard'

// just comment it if don't need it
import 'echarts-wordcloud';
import 'echarts-liquidfill';
import 'echarts-gl';
import { connect } from 'react-redux';
import {interactive} from 'src/core/library/utils/interactive'

// auto register map
const maps = (require as any).context('./map', false, /\.json/);
maps.keys().map((m: string) => {
  const matched = m.match(/\.\/([0-9a-zA-Z_]*)\.json/);
  if (matched) {
    echarts.registerMap(matched[1], maps(m));
  } else {
    console.warn("Can't register map: JSON file Should be named according to the following rules: /([0-9a-zA-Z_]*).json/.");
  }
});

const getStyles = () => ({
  wrapper: css`
    position: relative;
  `,
});

interface Props extends PanelProps<EchartsOptions> {
  theme: DatavTheme;
  resetDashboardVariables: typeof resetDashboardVariables
}


const EchartsPanel: React.FC<Props> = ({ options, data, width, height, theme, dashboard,resetDashboardVariables}) => {
  const styles = getStyles();
  const echartRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<echarts.ECharts>();


  const resetOption = debounce(
    () => {
      if (!chart) { return; }
      if (data.state && data.state !== "Done") { return; }
      try {
        chart.clear();
        let getOption = new Function(funcParams, getTemplateSrv().replace(options.optionsFunc));
        const o = getOption(data, theme, chart, echarts, (k,v) => interactive.setVariable(k,v,dashboard,resetDashboardVariables), interactive.setTime, getHistory());
        o && chart.setOption(o);
      } catch (err) {
        console.error('Editor content error!', err);
      }
    },
    150,
    { leading: true }
  );

  useEffect(() => {
    if (echartRef.current) {
      chart?.clear();
      chart?.dispose();
      setChart(echarts.init(echartRef.current, theme.type));
    }

    return () => {
      chart?.clear();
      chart?.dispose();
    };
  }, [echartRef.current]);

  useEffect(() => {
    chart?.resize();
  }, [width, height]);

  useEffect(() => {
    chart && resetOption();
  }, [chart, options.optionsFunc, data]);

  return (
    <div
      ref={echartRef}
      className={cx(
        styles.wrapper,
        css`
        width: ${width}px;
        height: ${height}px;
      `
      )}
    />
  );
}


const mapDispatchToProps = {
  resetDashboardVariables,
};


export default connect(null, mapDispatchToProps)(withTheme(EchartsPanel))


