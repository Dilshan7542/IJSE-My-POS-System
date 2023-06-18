import {Customer} from "../model/Customer.js";
import {Item} from"../model/Item.js";

var customerList=[];
customerList.push(new Customer("C001","Kamal","Mathara",55250.00));
customerList.push(new Customer("C002","Niamal","Galle",852250.00));
customerList.push(new Customer("C003","Danapala","Colombo",921250.00));
customerList.push(new Customer("C004","Danapala","Gampaha",121250.00));
customerList.push(new Customer("C005","Gunapala","Kurunagale",15250.00));

var itemList=[];
itemList.push(new Item("D001","Keyboard",10,500.00));
itemList.push(new Item("D002","Mouse",15,200.00));
itemList.push(new Item("D003","Monitor",5,10000.00));
itemList.push(new Item("D004","Pen Drive",20,1000.00));
itemList.push(new Item("D005","Hard disk",15,5000.00));

export {customerList,itemList}



