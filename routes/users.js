var express = require("express");
var assert = require("assert");
var router = express.Router();
var restify = require("restify-clients");

var client = restify.createJsonClient({
  url: "http://localhost:4000/",
});

/* GET home page. */
router.get("/", function(req, res, next) {
  client.get("/users", function (err, request, response, obj) {
    assert.ifError(err);

    res.end(obj);
  });
});

router.put("/:id", function(req, res, next) {
  client.put(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.end(obj);
  });
}); 

router.delete("/:id", function(req, res, next) {
  client.delete(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.end(obj);
  });
}); 

router.post("/:id", function(req, res, next) {
  client.post(`/users`, req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.end(obj);
  });
}); 

module.exports = router;
