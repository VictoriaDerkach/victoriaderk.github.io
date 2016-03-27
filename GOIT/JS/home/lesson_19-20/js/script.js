$(function(){

	//style for menu
    var $menuLink = $('.menu_link');
    $menuLink.eq(0).css('background-color', '#248cec');

    $menuLink.on('click', function() {
       $(this).css('background-color', '#248cec').parent('li').siblings().children('a').css('background-color', '#2a2d32');
    });

	//owl-carousel
    $("#owl-demo").owlCarousel({
    	navigation: false,
    	slideSpeed : 1000,
    	paginationSpeed : 1000,
    	singleItem: true
    });

	//accordeon
    $('.news_banner_link').on('click', function (e) {
        e.preventDefault();
        if($(this).hasClass('news_banner_link-hover')) {
            $(this).siblings('.news_banner_text').stop(true,true).slideUp();
            $(this).find('.news_banner_sign').text('+');
            $(this).removeClass('news_banner_link-hover');
        } else {
            $(this).addClass('news_banner_link-hover');
            $(this).siblings('.news_banner_text').stop(true,true).slideDown();
            $(this).find('.news_banner_sign').text('-');
        }
    });

	/*
	1. Массив скиллов (поле skills) всех людей, 
	не должно быть повторяющихся скиллов, так же они 
	должны быть отсортированы по алфавиту;*/
	var allSkills = [];
	_.forEach(dataJson, function(user){
		allSkills = _.union(allSkills, user.skills);
	});
	allSkills = _.sortBy(allSkills);
	console.log(allSkills);

	/*
	2. Массив имен (поле name) людей, отсортированных 
	в зависимости от количества их друзей (friends);*/
	var users = _.sortBy(dataJson, ['friends']);
	var allNames = [];
	_.forEach(users, function(user){
		allNames.push(user.name);
	});
	console.log(allNames);

	/*
	3. Массив всех друзей всех пользователей, не должно 
	быть повторяющихся людей*/
	var allFriends = [];
	_.forEach(users, function(user){
		allFriends = allFriends.concat(user.friends);
	});
	var allFriendsWithoutDuplicates = _.uniqBy(allFriends, function(friend) {
  		return friend.name;
	});
	console.log(allFriendsWithoutDuplicates);

});



