    /**
     * Created by sq on 2018/1/18.
     */
    (function($) {

        $('.pt-tab').on('click', 'li', function() {
            var $this = $(this),
                $index = $this.index();
                $this.addClass('on').siblings().removeClass('on');
            $('.item').hide().eq($index).addClass('itemOn').show();
        });

        //滚动条滚动高度
        $('.goTop').on('click', function() {
            $('html,body').animate({ scrollTop: '0px' }, 200);
        });

        //合作刊例
        $.ajax({
            type: 'GET',
            url: '/WinXinMarketing/GetShowList?TypeID=6',
            dataType: 'json',
            success: function(data, status, xhr) {
                if (data.ResultCode === "0") {
                    if (data.Data != null) {
                        var Html = '', li;
                        for (var i = 0; i <= data.Data.length - 1; i++) {
                            li = data.Data[i];
                            Html += '<li>';
                            Html += '<a href="' + li.TargetUrl + ' " id="' + li.PlaceInfoID + ' ">';
                            Html += '<img src=" ' + li.MinPic + '" alt=" ">';
                            Html += '<div class="tt_bg"><p>' + li.InfoTitle + '</p></div>';
                            Html += '</a>';
                            Html += '</li>';

                            /* var title = data.Data[i].InfoTitle; //标题
                             var src = data.Data[i].MinPic; //imageurl
                             var alter = data.Data[i].ModifyDate; //修改时间
                             var url = data.Data[i].TargetUrl; //跳转链接
                             var id = data.Data[i].PlaceInfoID; //图片id*/
                        }
                        $("#item2 ul").append(Html);
                    }
                }
            },
            error: function(xhr, type) {
                console.log('test');
            }
        });




    })(jQuery);