import {itemList} from "../db/db.js";
import {Item} from "../model/Item.js";
export class ItemController{

    constructor() {
        $("#itemBtnSection>:nth-child(1)").click(this.handelSaveItem.bind(this));
        $("#itemBtnSection>:nth-child(2)").click(this.handelUpdateItem.bind(this));
        $("#itemBtnSection>:nth-child(3)").click(this.handelDeleteItem.bind(this));
        $("#itemBtnSection>:nth-child(4)").click(this.handelNewItemAddTOClear.bind(this));
        $("#btnItemSearch").on("keyup",this.handelSearchItem.bind(this));
        this.itemList=itemList;
    }
    handelSaveItem(){
        for (let item of this.itemList) {
            if (item._code === $("#itemCode").val()) {
                alert("Item Exists....!!!")
                return;
            }
        }
        if(this.isValid()){

        }
    }

    isValid() {
        let code=/^D([0-9]){3,3}$/;
        let qty=/^(-)?([0-9]){1,5}$/;
        let unitPrice=/^\d+(\.\d)?\d*$/;

        if(!code.test($("#itemCode").val())){
            $("#itemCode").css("border-color","red");
            return false;
        }else{
            if ($("#itemDesc").val() === "") {
                $("#itemDesc").css("border-color","red");
                return false;
            }else{
                if (!qty.test($("#itemQty").val())) {
                    $("#itemQty").css("border-color","red");
                    return false;
                }else{
                    if (!unitPrice.test($("#itemUnitPrice").val())) {
                        $("#itemUnitPrice").css("border-color","red");
                        return false;
                    }else{
                        return true;
                    }
                }
            }
        }
    }

    handelUpdateItem(){

    }

    handelDeleteItem(){

    }
    handelSearchItem(){

    }
    handelNewItemAddTOClear(){

    }

}
let itemController = new ItemController();