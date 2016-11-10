var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDJlZDJmYjc0ZDAwMTFiZTdkMWIiLCJ1c2VybmFtZSI6ImFkYXB0ZWRiZWVAeWFuZGV4LnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0NzgwMjE4NzB9.kshDZ2CkUW637X_TLlhtKNeKgEKI5uVBqKfwpR2cu60';
var skb = new Skb(token);
skb.taskHelloWorld('Hello World!');