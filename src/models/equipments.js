const moment = require('moment');
const utcNow = moment().utc().format();

module.exports = function Product(data){
    this.id = data.id
    this.year = data.year,
    this.model = data.model,
    this.brand = data.brand,
    this.store_id = storeId,
    this.created_at = data.created_at || utcNow;
    this.updated_at = data.updated_at || utcNow;
};
