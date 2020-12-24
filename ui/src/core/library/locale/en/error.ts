const error = {
    // common
    targetIsRequired: 'Target is required',
    targetExist:  'Target already exist',
    noPermission: 'No permission', 


    emailFormat: 'Invalid email format',
    passwordEmpty: 'Password cannot be empaty',
    passwordNotMatch: 'The new password does not match the confirm one',
    needSelectTeamMember: 'Select a team member first',
    dashboardAlreadyInFolder: `Dashboard already belongs to folder {title}`,
    //sidemenu
    sideMenuNotExist: 'The sidemenu you are using is not exist any more,please choose another one instead',
    cantMove: 'Cannot move a menu item with children into another menu item',
    menuNameEmpty: `Menu name can't be empty`,
    menuUrlEmpty: `Menu url can't be empty`,
    menuUrlPrefixInvalid:  `Url must be start with '/'`,
    menuUrlCharInvalid: `Url  can only have '/' and 'aAzZ' letters`,
    menuUrlOnlyOnePrefix: `Sub url can have only one '/'`,
    menuUrlReserved: `this url is reserved,please change one`,
    menuDashUidEmpty: `Menu dashboard uid can't be empty`,
    menuIconEmpty: `Menu icon can't be empty`,
    menuDashUidExist: `Dashboard uid already exist at menu :`,
    menuChildHasChild: `Child menu item can't has a child`,
    menuSameUrlExist: 'The same url already exist at menu :',
    menuDashNotExist: `Can't find dashboard`,
    menuCannotBeEmpty: `Menu must have at lease one item`,
    
    // backend common
    serverInternalError: 'Oops, a server internal error happened, check logs to see what happend',
    userNameOrIdEmpty: 'User name or id cannot be empty',
    userNameOrPasswordEmpty: 'User name and password cannot be empty',
    passwordIncorrect: 'Old password is not correct',
    badRequestData: 'Bad request data',
    teamAlreadyExist: 'Team already exist',
    teamNotExist: 'Team not exist',
    userNotExist: 'User not exist',
    folderNotExist: 'Folder not exist',
    targetAlreadyExist: 'Target already exist',
    targetNotExist: 'Target not exist',

    // backend
    addMemberToGlobal: "You cannot add members to global team, please use 'Add User' instead",
    deleteMemberInGlobal: "You cannot delete member in global team, please use 'Delete User' instead",
    deleteMemberTeamCreator: "Team creator cannot be deleted, transfer the team first",
    deleteSelf: "You cannot delete your self",
    globalTeamCantChange:  "Global team cannot be updated",
    teamCreatorRoleInvalid: "Team creator's role must be 'Admin'",
    globalTeamTransfer: "Global team cannot be transferred,it must belongs to 'admin' user",
    globalTeamDelete: "Global team cannot be deleted",
    teamCreatorLeaveTeam: "team creator cannot leave team, need transfer team to another member first",
    globalTeamLeave: "You cannot leave global team,this team is default team in datav",
    mustHaveCanView:  "CanView is needed for this role",
    unsupportSearch: "Unsupported search query",
    pluginNotFound: "Plugin not found, no installed plugin with that id",
    pluginMdError: "Could not get markdown file",
    folderNameGeneral:  "Cannot use 'General' as folder name",
    dashTitleEmpty: "Dashboard title cannot be empty",
    dashUidInvalid: "uid contains illegal characters",
    dashUidTooLong: "uid to long. max 40 characters",
    dashUserAclNotExist: "User permission row not exist",
    badUserRole: "Bad user role",
    needLogin: "Your login info has expired, please login",
    deleteAdminUser: "username 'admin' mustn't be deleted",
    deleteUserHasTeams: "this user has teams,please transfer or delete teams first",
    loadDatasourceError: "load datasource error",
    requestDatasourceError: "reqeust to datasource store error",
    customHttpHeaderEmpty: "Custom http header's kv cannot be empty",
    notifierNotExist: 'Target notifier does not exist in backend',
    buildNotifierError: 'Build notifier error, please check logs in backend',
    cantDeleteReserverDash: 'This dashboard is reserved, cant be deleted',
    alertsQueryNotExist: "The query of the alert condition is not exist, please add a query for that panel first, or remove the alerts",
    // datasource
    sameNameExist: "A datasource with the same name already exist",
}

export default error