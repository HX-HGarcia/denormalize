const users = JSON.parse(
  `[{
    "id": "e287177ef689", "name": "Charles", "address": "LF 16", "premium": false 
  },{
    "id": "df5dc4dba9b4", "name": "Max", "address": "RB 1", "premium": true 
  },{
    "id": "8ec3935ffcdf", "name": "Mick", "address": "HA 47", "premium": false 
  },{
    "id": "6e520d40eb7d", "name": "Yuki", "address": "AT 22", "premium": false 
  },{
    "id": "ca8c72985282", "name": "Sebastian", "address": "AM 5", "premium": true 
  },{
    "id": "dba5bdbaebba", "name": "George", "address": "MC 63", "premium": true 
  }]`
);

const orders = JSON.parse(`[{
    "id": "99bc6", "userId": "dba5bdbaebba", "amount": 12 ,"products": ["af1", "lp2", "li0"], "date": "11/28/2022" 
  },{
    "id": "576d7", "userId": "df5dc4dba9b4", "amount": 199 ,"products": ["lp2", "br45"], "date": "10/20/2022" 
  },{
    "id": "2566f", "userId": "ca8c72985282", "amount": 2 ,"products": ["af1"], "date": "11/28/2022" 
  },{
    "id": "7a933", "userId": "df5dc4dba9b4", "amount": 79 ,"products": ["xx3", "fd5", "af1"], "date": "11/28/2022" 
  },{
    "id": "266de", "userId": "ca8c72985282", "amount": 45 ,"products": ["lp2", "af1"], "date": "10/20/2022" 
  },{
    "id": "698cf", "userId": "ca8c72985282", "amount": 14 ,"products": ["li0"], "date": "10/20/2022" 
  }]`);

module.exports = {
  users,
  orders,
};
