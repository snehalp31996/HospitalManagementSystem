/**
 * @author Snehal Patil
 * @date 12/08/2021
 * @since  0.0.1
 */
var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
    
    // var sql='SELECT e.emp_name, e.qualification FROM Employee e, senior_doctor s WHERE e.emp_id = s.doc_id';
    // var sql ="SELECT * FROM Employee where emp_id = '300001' ";
    let value = 'M.D.';
    let sql =`SELECT * FROM Employee WHERE qualification = ?`;

    
    db.query(sql, value, (err, allDocs, fields) => {
      if (err) throw err;
      db.query(`SELECT * FROM Junior_doctor`, (err, juniorDocIds) => {
        if (err) throw err;
        let doctors = [];
        juniorDocIds.forEach((doc) => {
          doctors.push(doc.doc_id);
        });
        db.query(`SELECT * FROM Employee WHERE emp_id IN (?)`, [doctors], (err,juniorDocs) => {
          if (err) throw err;
          res.render('user-list', { title: 'User List', userData: allDocs, junDocs: juniorDocs});
        });
      });
  });
});


router.post('/appointment', (req, res) => {
  var { fullName, dr_dropdown, datetime } = req.body;

  var sql= `INSERT INTO Appointments (pat_name, doc_id, apt_time) VALUES ( ?, ?, ?)`;
  let value = [fullName, dr_dropdown, datetime];
  db.query(sql, value, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    res.redirect('/users/user-list');
  });
});


// post('/', (req, res) => {
//   const { fname, dr_dropdown,datetime } = req.body;

//   const sql = "INSERT INTO Appointments (apt_num, pat_num,doc_id,apt_time) VALUES ('70011','test','300001',sysdate)";

//   mysqlConnection.query(sql, (err, rows, fields) => {
//       if (!err) {
//           res.send(rows);
//       } else {
//           console.log(err.message);
//           res.send(err);
//       }
//   })
// });

module.exports = router;

