const mongoose = require('mongoose')
const Schema = mongoose.Schema



const FormSchema = new Schema({
   company_name: {
       type: String,
        required: false
   },
   company_name_E : {
       type: String,
       required: false
   },
   headquarters: {
       governorate:{type: String},
       city:{type: String},
       address:{type: String},
       telephone:{type: String},
       fax:{type:String}
   },
   financial_info: {
       Currency:{type:String},
       Capital:{type:Number}
   },
   Investor: {
       type: Schema.Types.ObjectId,
       ref: 'Investor'
    //    required: true
   }
//   , _type:{
//          type: String,
//        required: true
//   }
//  ,  Board :[{
//        type:mongoose.Schema.Types.ObjectId,
//        ref:'InvestorBoardMember'
//    }]
})

/*const SPCSchema = new Schema({

})*/
module.exports = Form = mongoose.model('Form', FormSchema);