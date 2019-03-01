const Schema = mongoose.Schema

const InvestorBoardMemberschema = new Schema({
   name: {
       type: String,
       required: true
   },
   gender: {
       type: String,
       required: true
   },
   Nationality: {
       type: String,
       required: true
   },
   ID_Type: {
       type: String,
       required: true
   },
   ID_Number: {
       type: Number,
       required: true
   },
   Date_of_Birth: {
       type: Date,
       required: true
   }
   ,
   Address: {
       type: String,
       required: true
   },
   Investor_Type: {
       type: String,
       required: true
   }
})

module.exports = InvestorBoardMember = mongoose.model('InvestorBoardMember', InvestorBoardMemberschema);