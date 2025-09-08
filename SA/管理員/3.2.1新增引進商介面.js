
//新增引進商
function confirmAdd() {
	var urlParams = new URLSearchParams(window.location.search);
    var adminId = urlParams.get('admin_id');
    var businessNumber = $('#businessNumber').val();
    var name = $('#name').val();
    var account = $('#account').val();
    var password = $('#password').val();

    var dataObject = {
        "businessNumber": businessNumber,
        "username": name,
        "email": account,
        "password": password
    };

    var dataString = JSON.stringify(dataObject);

    $.ajax({
        url: '/MovieReviw/api/UserController.do',
        method: 'POST',
        data: dataString,
        crossDomain: true,
        cache: false,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if(response.registercode == 1) {
				window.location.href = '3.2帳號管理介面.html?admin_id=' + adminId;
			}
			else {
				swal("引進商新增失敗",response.message, "error");
				//alert(response.message);
			} 
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}
function cancel() {
	var urlParams = new URLSearchParams(window.location.search);
    var adminId = urlParams.get('admin_id');
    window.location.href = '3.2帳號管理介面.html?admin_id=' + adminId;
}