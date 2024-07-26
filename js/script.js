$(document).ready(function () {
        $('.tea-cards').slick({
                infinite: true,
                nextArrow: '<svg class="my-slick-prev" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M40.3398 20C40.3398 30.771 31.635 39.5 20.9003 39.5C10.1655 39.5 1.46069 30.771 1.46069 20C1.46069 9.22902 10.1655 0.5 20.9003 0.5C31.635 0.5 40.3398 9.22902 40.3398 20Z" stroke="#076BFF"/>\n' +
                    '<g clip-path="url(#clip0_27_13)">\n' +
                    '<path d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z" fill="#595555"/>\n' +
                    '</g>\n' +
                    '<defs>\n' +
                    '<clipPath id="clip0_27_13">\n' +
                    '<rect width="19.9396" height="20" fill="white" transform="matrix(-1 0 -2.22607e-08 1 30.87 10)"/>\n' +
                    '</clipPath>\n' +
                    '</defs>\n' +
                    '</svg>\n',
                prevArrow: '<svg class="my-slick-next" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M0.669186 20C0.669186 9.22902 9.374 0.5 20.1088 0.5C30.8435 0.5 39.5483 9.22902 39.5483 20C39.5483 30.771 30.8435 39.5 20.1088 39.5C9.374 39.5 0.669186 30.771 0.669186 20Z" stroke="#076BFF"/>\n' +
                    '<g clip-path="url(#clip0_27_14)">\n' +
                    '<path d="M25.6794 20.5226L17.218 29.8232C17.0223 30.0385 16.7537 30.1645 16.4618 30.1781C16.1699 30.1916 15.8909 30.091 15.6764 29.8947L14.9936 29.2705C14.5492 28.8638 14.5176 28.1707 14.923 27.7251L22.0283 19.915L14.233 12.788C14.0185 12.5918 13.8928 12.3228 13.8794 12.0303C13.866 11.7375 13.9668 11.4579 14.1624 11.2425L14.7856 10.5579C14.9814 10.3426 15.2499 10.2165 15.5418 10.203C15.8337 10.1894 16.1127 10.2901 16.3271 10.4863L25.6087 18.9718C25.8237 19.1687 25.9491 19.439 25.9619 19.732C25.9759 20.0261 25.8756 20.3068 25.6794 20.5226Z" fill="#595555"/>\n' +
                    '</g>\n' +
                    '<defs>\n' +
                    '<clipPath id="clip0_27_14">\n' +
                    '<rect width="19.9396" height="20" fill="white" transform="matrix(1 0 2.22607e-08 -1 10.1389 30)"/>\n' +
                    '</clipPath>\n' +
                    '</defs>\n' +
                    '</svg>\n'
            }
        )
        $(function () {
            $("#accordion").accordion({
                heightStyle: "content"
            });
        });

        new WOW({animateClass: 'animate__animated'}).init();

        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });

        let phoneNumberInput = $('#inputPhoneNumber');
        phoneNumberInput.mask("+9 (999) 999-99-99");
        let orderFormInput = $('#orderForm>div>input');
        let inputIndex = $('#inputIndex');
        let cards = $('.tea-collections__cards .card');
        cards.on('mouseover', (event) => {
            $(event.target).parent('.card').css('z-index', '99');
        });
        cards.on('mouseleave', (event) => {
            $(event.target).parent('.card').css('z-index', '0');
        });

        $('#orderSubmit').click((event) => {
            for (let i = 0; i < orderFormInput.length; i++) {
                if (!orderFormInput.eq(i).val()) {
                    alert("Заполните поле " + orderFormInput.eq(i).attr('name').toUpperCase());
                    orderFormInput.eq(i).addClass("is-invalid");
                    event.preventDefault();
                    return;
                }
                if (orderFormInput.eq(i).attr('name') === 'Индекс' && inputIndex.val().length !== 6) {
                    alert("Поле " + inputIndex.attr('name').toUpperCase() + " должно содержать 6 символов")
                    orderFormInput.eq(i).addClass("is-invalid");
                    event.preventDefault();
                    return;
                }
            }
            $(".form-order").addClass('animate__fadeOutRight').removeClass("animate__fadeInRight");
            setTimeout(() => {
                $(".form-order").hide();
                $(".hide").addClass("animate__fadeInLeft").show();
                {
                    let count = 4;
                    let countDown = setInterval(() => {
                        count--;
                        $("#hideCounter").text(`${count}`);
                        if (!count) {
                            clearInterval(countDown);
                        }
                    }, 1000);
                }
            }, 1000);

            setTimeout(() => {
                $(".hide").addClass("animate__fadeOutLeft");
            }, 5000);
            setTimeout(() => {
                $(".form-order").removeClass("animate__fadeOutRight").addClass("animate__fadeInRight").show();
                $(".hide").removeClass("animate__fadeInLeft").removeClass("animate__fadeOutLeft").hide();
            }, 6000);

            event.preventDefault();
        });


        orderFormInput.keydown(() => {
            orderFormInput.removeClass("is-invalid");
        });

        inputIndex.keypress((event) => {
            if (isNaN(parseInt(event.key)) || inputIndex.val().length > 5) {
                return false;
            }
        });
    }
)


