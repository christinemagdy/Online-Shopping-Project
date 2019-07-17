$(document).ready(function(){
    $("#buyButton").click(function(){
        $("#buyModal").modal('show');
    });
});

$(document).ready(function(){
    $("#loginBtn").click(function(){
        $("#loginModal").modal('show');
    });
});

$(document).ready(function(){
    $("#signUpBtn").click(function(){
        $("#signUpModal").modal('show');
    });
});

$(document).ready(function(){
    $("#editButton").click(function(){
        $("#editItemModal").modal('show');
    });
});

$(document).ready(function(){
    $("#addBtnID").click(function(){
        $("#addAdminModal").modal('show');
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});