import React, { FC } from 'react';
import { PluginMeta } from 'src/packages/datav-core/src';
import { Link } from 'react-router-dom';

interface Props {
  plugin: PluginMeta;
}

const PluginListItem: FC<Props> = props => {
  const { plugin } = props;

  return (
    <li className="card-item-wrapper">
      <Link className="card-item" to={`/plugin/${plugin.id}/`}>
        <div className="card-item-header">
          <div className="card-item-type">{plugin.type}</div>
          {plugin.hasUpdate && (
            <div className="card-item-notice">
              <span bs-tooltip="plugin.latestVersion">Update available!</span>
            </div>
          )}
        </div>
        <div className="card-item-body">
          <figure className="card-item-figure">
            <img src={plugin.info.logos.small} />
          </figure>
          <div className="card-item-details">
            <div className="card-item-name">{plugin.name}</div>
            <div className="card-item-sub-name">{`By ${plugin.info.author.name}`}</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PluginListItem;
