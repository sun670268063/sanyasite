(function ($) {
    // 根据经纬度标出商家图文信息
        badgeInfo = function (map, data) {
            var marker,
                content,
                i, len;

            if (data === null) {
                return;
            }
            for (i = 0, len = data.length; i < len; i++) {
                marker = new BMap.Marker(new BMap.Point(data[i]['longitude'], data[i]['latitude']));  // 创建标注
                map.addOverlay(marker);               // 将标注添加到地图中
            }
        },
    // 咨询服务站点
        server = function () {
            var axis = [
                    //市民游客中心
                    {
                        y: 18.2355430000,
                        x: 109.5261930000
                    },
                    // 大东海站
                    {
                        y: 18.2275600000,
                        x: 109.5310120000
                    },
                    // 步行街站
                    {
                        y: 18.2555440000,
                        x: 109.5111730000
                    },
                    // 凤凰机场国内到达厅站
                    {
                        y: 18.3134570000,
                        x: 109.4148830000
                    },
                    // 凤凰岛码头站
                    {
                        y: 18.2437580000,
                        x: 109.4986870000
                    },
                    // 三亚湾蓝海站
                    {
                        y: 18.2715420000,
                        x: 109.4940420000
                    },
                    // 天涯海角站
                    {
                        y: 18.2996180000,
                        x: 109.3579900000
                    },
                    // 大小洞天站
                    {
                        y: 18.3071530000,
                        x: 109.1869630000
                    },
                    // 三亚吉阳站
                    {
                        y: 18.2874410000,
                        x: 109.5937950000
                    },
                    // 三亚春园站
                    {
                        y: 18.2597150000,
                        x: 109.5142540000
                    },
                    // 三亚海月广场站
                    {
                        y: 18.2659120000,
                        x: 109.5013500000
                    },
                    // 三亚亚龙湾站
                    {
                        y: 18.2372730000,
                        x: 109.6512190000
                    }
                ],
            // 绘制地图
                draw = function (x, y) {
                    // 百度地图API功能
                    var map = new BMap.Map('dituContent'),
                        data = [
                            //市民游客中心
                            {
                                latitude: 18.2355430000,
                                longitude: 109.5261930000,
                                merchantName: '市民游客中心',
                                address: '三亚市榆亚大道'
                            },
                            // 大东海站
                            {
                                latitude: 18.2275600000,
                                longitude: 109.5310120000,
                                merchantName: '大东海站',
                                address: '三亚市大东海珠江花园酒店对面'
                            },
                            // 步行街站
                            {
                                latitude: 18.2555440000,
                                longitude: 109.5111730000,
                                merchantName: '步行街站',
                                address: '三亚市解放路步行街入口'
                            },
                            // 凤凰机场国内到达厅站
                            {
                                latitude: 18.3134570000,
                                longitude: 109.4148830000,
                                merchantName: '凤凰机场国内到达厅站',
                                address: '三亚凤凰机场国内到达厅3号门'
                            },
                            // 凤凰岛码头站
                            {
                                latitude: 18.2437580000,
                                longitude: 109.4986870000,
                                merchantName: '凤凰岛码头站',
                                address: '三亚市凤凰岛邮轮港联检大楼一楼入口处'
                            },
                            // 三亚湾蓝海站
                            {
                                latitude: 18.2715420000,
                                longitude: 109.4940420000,
                                merchantName: '三亚湾蓝海站',
                                address: '三亚市三亚湾路蓝海三期小区对面靠海边侧'
                            },
                            // 天涯海角站
                            {
                                latitude: 18.2996180000,
                                longitude: 109.3579900000,
                                merchantName: '天涯海角站',
                                address: '三亚天涯海角景区游客中心'
                            },
                            // 大小洞天站
                            {
                                latitude: 18.3071530000,
                                longitude: 109.1869630000,
                                merchantName: '大小洞天站',
                                address: '三亚大小洞天景区游客中心'
                            },
                            // 三亚吉阳站
                            {
                                latitude: 18.2874410000,
                                longitude: 109.5937950000,
                                merchantName: '三亚吉阳站',
                                address: '吉阳镇公园靠路边处（通亚龙湾方向）'
                            },
                            // 三亚春园站
                            {
                                latitude: 18.2597150000,
                                longitude: 109.5142540000,
                                merchantName: '三亚春园站',
                                address: '春园路城市乐园广场停车场入口处左侧'
                            },
                            // 三亚海月广场站
                            {
                                latitude: 18.2659120000,
                                longitude: 109.5013500000,
                                merchantName: '三亚海月广场站',
                                address: '金凤凰海景酒店东南门侧绿化带处（自助图书馆左侧旁）'
                            },
                            // 三亚亚龙湾站
                            {
                                latitude: 18.2372730000,
                                longitude: 109.6512190000,
                                merchantName: '三亚亚龙湾站',
                                address: '亚龙湾中心广场售票处对面草坪'
                            }
                        ];

                    map.centerAndZoom(new BMap.Point(x, y), 17);
                    //开启鼠标滚轮缩放
                    map.enableScrollWheelZoom(true);

                    badgeInfo(map, data);

                    return map;
                },
            // 绑定事件
                bindEvent = function () {
                    $('body').delegate('.server-area', 'change', function () {
                        var i = +$(this).val() - 1;
                        draw(axis[i].x, axis[i].y);
                    });
                },
                init = function () {
                    var i = +$('.server-area').val() - 1,
                        map = draw(axis[i].x, axis[i].y);
                    bindEvent();
                };

            init();
        };

    $(function(){
        // 咨询服务站点
        server();
    });

})($);