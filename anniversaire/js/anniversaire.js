$(document).ready(function() {
    $('.button').click(function() {
        var body = $('.bodyyy');

        var friend = $('<div></div>')
            .text("you are a great friend")
            .addClass("friend");
        body.append(friend);

        friend.click(function() {
            var today = $('<div></div>')
                .text("Today's your birthday")
                .addClass('today');
            body.append(today);

            today.click(function() {
                var wish = $('<div></div>')
                    .text("wishing you all the best")
                    .addClass('wish');
                body.append(wish);

                wish.click(function() {
                    friend.text("happy birthday");
                    today.text("happy birthday");
                    wish.text("happy birthday");
                    body.addClass('bckgimage');
                });
            });
        });
    });
});
