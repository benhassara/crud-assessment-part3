process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var Project = require('../server/models/project');
var should = chai.should();

chai.use(chaiHttp);
