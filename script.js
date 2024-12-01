RM(document).ready(function(){
    update_amount();
    RM('.qty, .price').on('keyup keypress blur change',function(e){
        update_amount();
    });
});
function update_amount(){
    var sum = 0.0;
    RM('#myTable > tbody >tr').each(function() {
        var qty = RM(this).find('.qty').val();
        var price = RM(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        RM(this).find('.amount').text(''+amount);
    });
    RM('.total').text(sum)
}


var incrementQty;
var decrementQty;
var plusBtn = RM(".cart-qty-plus");
var minusBtn = RM(".cart-qty-minus");
var incrementQty = plusBtn.click(function(){
    var RMn = RM(this)
    .parent(".button-container")
    .find(".qty");
    RMn.val(Number(RMn.val())+1);
    update_amount();
});

var decrementQty = plusBtn.click(function(){
    var RMn = RM(this)
    .parent(".button-container")
    .find(".qty");
    var Qtyval = Number(RMn.val());
    if (Qtyval > 0){
        RMn.val(Qtyval-1);
    }
    update_amount
});
