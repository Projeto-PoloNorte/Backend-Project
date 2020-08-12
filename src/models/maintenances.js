const moment = require('moment');
const utcNow = moment().utc().format();

module.exports = function Maintenance(data){
    this.id = data.id;
    this.user_id = data.user_id;
    this.equipment_id = data.equipment_id;
    this.description = data.description;
    this.created_at = data.created_at || utcNow;
    this.updated_at = data.updated_at || utcNow;
};
