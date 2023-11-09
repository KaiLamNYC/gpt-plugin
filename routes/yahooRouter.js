const express = require("express");
const router = express.Router();

const {
	testFunction,
	handleAuthCallback,
} = require("../controllers/yahooController");

router.get("/test", testFunction);

router.get("/auth/callback", handleAuthCallback);

module.exports = router;

//ENDPOINT FOR ROSTER
//https://fantasysports.yahooapis.com/fantasy/v2/team/428.l.90803.t.4/roster
//428 IS THE GAME KEY FOR NBA
//NEED REFRESH TOKEN FUNCTION
//NEED ADD FUNCTION

//PROPOSE TRADE URL
//https://fantasysports.yahooapis.com/fantasy/v2/league/428.l.90803/transactions

//XML BODY
// <?xml version='1.0'?>
// <fantasy_content>
//   <transaction>
//     <type>pending_trade</type>
//     <trader_team_key>428.l.90803.t.4</trader_team_key>
//     <tradee_team_key>428.l.90803.t.7</tradee_team_key>
//     <trade_note>skeeeyeeee</trade_note>
//     <players>
//       <player>
//         <player_key>428.p.6413</player_key>
//         <transaction_data>
//           <type>pending_trade</type>
//           <source_team_key>428.l.90803.t.7</source_team_key>
//           <destination_team_key>428.l.90803.t.4</destination_team_key>
//         </transaction_data>
//       </player>
//       <player>
//         <player_key>428.p.6516</player_key>
//         <transaction_data>
//           <type>pending_trade</type>
//           <source_team_key>428.l.90803.t.4</source_team_key>
//           <destination_team_key>428.l.90803.t.7</destination_team_key>
//         </transaction_data>
//       </player>
//     </players>
//   </transaction>
// </fantasy_content>
