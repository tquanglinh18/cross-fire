$(function () {
    $('.toggle-password').click(function () {
        var passwordField = $('.toggle-password ~ input');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }

        $('.toggle-password').toggleClass('toggle-password--show');
        $('.toggle-password').toggleClass('toggle-password--hide');
    });
});
