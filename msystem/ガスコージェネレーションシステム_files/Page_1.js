jQuery(function($){
  var dl30_dev_id = 2;
  var targetId;
  var BtnSelecter = null;
  var getAllData = function(){
    var defer = $.Deferred();
    var promise = defer.promise();
    var filter;
    filter = function(){
      return $.getJSON('data_ai_d.json', function(data){
        $(window).trigger('onReadData_AI', data);
      }).fail(function(){
        console.log('data_ai_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_di_d.json', function(data){
        $(window).trigger('onReadData_DI', data);
      }).fail(function(){
        console.log('data_di_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_pi_d.json', function(data){
        $(window).trigger('onReadData_PI', data);
      }).fail(function(){
        console.log('data_pi_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_ma_d.json', function(data){
        $(window).trigger('onReadData_MA', data);
      }).fail(function(){
        console.log('data_ma_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_md_d.json', function(data){
        $(window).trigger('onReadData_MD', data);
      }).fail(function(){
        console.log('data_md_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_ao_d.json', function(data){
        $(window).trigger('onReadData_AO', data);
      }).fail(function(){
        console.log('data_ao_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_do_d.json', function(data){
        $(window).trigger('onReadData_DO', data);
      }).fail(function(){
        console.log('data_do_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('data_gdo_d.json', function(data){
        $(window).trigger('onReadData_GDO', data);
      }).fail(function(){
        console.log('data_gdo_d.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    filter = function(){
      return $.getJSON('header.json', function(data){
        $(window).trigger('onReadData_HEADER', data);
      }).fail(function(){
        console.log('header.jsonからのデータの取得に失敗しました');
      });
    };
    promise = promise.then(filter, filter);
    var interval = function(){
      setTimeout(getAllData, 1000);
    };
    promise = promise.then(interval, interval);
    defer.resolve();
  };
  $(window).on('onWriteData', function(e, chType, chNo, chValue){
    OutputData(chType, chNo, chValue);
  });
  if( (window.PointerEvent) || (window.navigator.pointerEnabled) ){
    $(document).on('pointerup', function(){
      targetId = null;
    });
  }
  $(document).on('contextmenu', function(e) {return false;});
  (function(){
    var $target  = $('#Image_001');
    var bgImage  = "1128GCS28.jpg" ? $('<img/>').prop('src', "1128GCS28.jpg") : null;
    var bgRepeat = "stretch";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_001');
    var defaultValue = 0;
    var underZero    = 0;
    var addComma     = 0;
    var valType  = "MA";
    var valChNo  = 1;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_001');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_002');
    var defaultValue = 0;
    var underZero    = 0;
    var addComma     = 0;
    var valType  = "MA";
    var valChNo  = 2;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_002');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_003');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "AI";
    var valChNo  = 3;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_003');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_004');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "AI";
    var valChNo  = 6;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_004');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_005');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "AI";
    var valChNo  = 5;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_005');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#HeaderDisp_001');
    var headerKey    = "h_time";
    
    // セッター
    var setProp = function(value){
        $target.text(value);
    };
    
    // データ取得
    $(window).on('onReadData_HEADER', function(e, data){
        setProp(data[headerKey]);
    });
  })();
  (function(){
    var $target  = $('#DataDisp_006');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "AI";
    var valChNo  = 4;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_006');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Label_007');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Image_002');
    var bgImage  = "MSYSTEM.JPG" ? $('<img/>').prop('src', "MSYSTEM.JPG") : null;
    var bgRepeat = "stretch";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_007');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "AI";
    var valChNo  = 7;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_008');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_008');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "AI";
    var valChNo  = 8;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_009');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Gauge_001 div');
    var width    = 64;
    var height   = 97;
    var border   = 3;
    var maxScale     = 100;
    var minScale     = 0;
    var orientation  = "Vertical";
    var valType  = "AI";
    var valChNo  = 12;
    
    // セッター
    var setProp = function(value){
        var scale = maxScale - minScale;
        var start = minScale;
        var end = Math.min(Math.max(value, Math.min(minScale, maxScale)), Math.max(minScale, maxScale));
        var length;
        if (orientation == 'Horizontal') {
            length = width - border * 2;
            $target.width(length * (end - start) / scale)
                    .css('left', (length * (start - minScale) / scale) + 'px');
        } else {
            length = height - border * 2;
            $target.height(length * (end - start) / scale)
                    .css('top', (length * (maxScale - end) / scale) + 'px');
        }
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(0);
  })();
  (function(){
    var $target  = $('#Label_010');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Label_011');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#RegionDisp_001');
    var valType  = "DI";
    var valChNo  = 37;
    
    // セッター
    var setProp = function(value, color){
        $target.text(value);
        if (color) {
            $target.css('background-color', color);
        }
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        switch (valType)
        {
            case 'DI':
            case 'MD':
            case 'DO':
            case 'GDO':
                setProp(data['ch_status'][data.ch_no.indexOf(valChNo)], data['ch_color'][data.ch_no.indexOf(valChNo)]);
                break;
            case 'AI':
            case 'PI':
            case 'MA':
                setProp(data['ch_area'][data.ch_no.indexOf(valChNo)], data['ch_color'][data.ch_no.indexOf(valChNo)]);
                break;
        }
    });
  })();
  (function(){
    var $target  = $('#RegionDisp_002');
    var valType  = "DI";
    var valChNo  = 38;
    
    // セッター
    var setProp = function(value, color){
        $target.text(value);
        if (color) {
            $target.css('background-color', color);
        }
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        switch (valType)
        {
            case 'DI':
            case 'MD':
            case 'DO':
            case 'GDO':
                setProp(data['ch_status'][data.ch_no.indexOf(valChNo)], data['ch_color'][data.ch_no.indexOf(valChNo)]);
                break;
            case 'AI':
            case 'PI':
            case 'MA':
                setProp(data['ch_area'][data.ch_no.indexOf(valChNo)], data['ch_color'][data.ch_no.indexOf(valChNo)]);
                break;
        }
    });
  })();
  (function(){
    var $target  = $('#Link_002');
    var bgImage  = "Trend.JPG" ? $('<img/>').prop('src', "Trend.JPG") : null;
    var bgRepeat = "no-repeat";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Link_003');
    var bgImage  = "Event.JPG" ? $('<img/>').prop('src', "Event.JPG") : null;
    var bgRepeat = "no-repeat";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Link_004');
    var bgImage  = "Report.JPG" ? $('<img/>').prop('src', "Report.JPG") : null;
    var bgRepeat = "no-repeat";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Link_005');
    var bgImage  = "Data.JPG" ? $('<img/>').prop('src', "Data.JPG") : null;
    var bgRepeat = "no-repeat";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#DataDisp_009');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "PI";
    var valChNo  = 7;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#DataDisp_010');
    var defaultValue = 0;
    var underZero    = 1;
    var addComma     = 0;
    var valType  = "PI";
    var valChNo  = 7;
    
    // セッター
    var setProp = function(value){
        $target.text(formatValue(value, underZero, addComma));
    };
    
    // データ取得
    $(window).on('onReadData_' + valType, function(e, data){
        setProp(data.ch_real[data.ch_no.indexOf(valChNo)]);
    });
    
    setProp(defaultValue);
  })();
  (function(){
    var $target  = $('#Label_012');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Button_001');
    var onLabel      = "リセット中";
    var onLabelSize  = "10px";
    var onTextAlign  = "left";
    var onColor      = "rgb(0,0,0)";
    var offLabel     = "リセット";
    var offLabelSize = "10px";
    var offTextAlign = "left";
    var offColor     = "rgb(0,0,0)";
    var onImage          = "icon_Q-6.png" ? $('<img/>').prop('src', "icon_Q-6.png") : null;
    var onImageRepeat    = "no-repeat";
    var offImage         = "icon_S-1.png" ? $('<img/>').prop('src', "icon_S-1.png") : null;
    var offImageRepeat   = "no-repeat";
    var verify           = 1;
    var defaultDispMode  = "OFF";
    var mode             = "MOM";
    var onType           = "MD";
    var onChNo           = 2;
    var chEnable;
    
    // セッター
    var setProp = function(value){
        var prop = {};
        if (value == 1) {
            prop['text']        = onLabel;
            prop['fontSize']    = onLabelSize;
            prop['textAlign']   = onTextAlign;
            prop['color']       = onColor;
            prop['image']       = onImage;
            prop['repeat']      = onImageRepeat;
        } else {
            prop['text']        = offLabel;
            prop['fontSize']    = offLabelSize;
            prop['textAlign']   = offTextAlign;
            prop['color']       = offColor;
            prop['image']       = offImage;
            prop['repeat']      = offImageRepeat;
        }
        $target.data('switch', value)
                .text(prop['text'])
                .css('font-size', prop['fontSize'])
                .css('text-align', prop['textAlign'])
                .css('color', prop['color']);
        if (prop['image']) {
            switch (prop['repeat']) {
                case 'stretch':
                    prop['repeat'] = '100% 100%';
                    break;
                case 'repeat-x':
                    prop['repeat'] = '100% ' + prop['image'].prop('height') + 'px';
                    break;
                case 'repeat-y':
                    prop['repeat'] = prop['image'].prop('width') + 'px 100%';
                    break;
                default:
                    prop['repeat'] = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + prop['image'].prop('src') + ')')
                    .css('background-size', prop['repeat']);
        } else {
            $target.css('background-image', '');
        }
    };
    
    // データ取得
    $(window).on('onReadData_' + onType, function(e, data){
        if( dl30_dev_id == 2 ){
            chEnable = data.ch_enable[data.ch_no.indexOf(onChNo)];
        }
        setProp(data.ch_data[data.ch_no.indexOf(onChNo)]);
    });
    
    var OnPointerdown = function(e){
        targetId = e.target.id;
    };
    
    // クリック処理
    var OnClickProc = function(){
        var value;
        if(BtnSelecter != null) return;
        if (mode == 'ON' || mode == 'OFF') {
            value = mode;
        } else if (mode == 'ALT' && $target.data('switch') == 1) {
            value = 'OFF';
        } else {
            value = 'ON';
        }
        var commitMethod = function(){
            //setProp(value);
            // 出力
            $(window).trigger('onWriteData', [onType, onChNo, value]);
        };
        if( dl30_dev_id == 2 ){
            if( chEnable == 0 ){
                $('#message').data('alert')('操作できません');
            }
            else if (verify) {
                $('#message').data('confirm')(value + 'に変更しますか？', commitMethod);
            }else{
                commitMethod();
            }
        }
        else{
            if (verify) {
                $('#message').data('confirm')(value + 'に変更しますか？', commitMethod);
            }else{
                commitMethod();
            }
        }
    };
    
    var OnPointerup = function(e){
    	// ポインターダウン時と同じアイテムの場合はクリックと判定
    	if(e.target.id == targetId){
    		OnClickProc();
    	}
    	targetId = null;
    };
    
    var OnClick = function(){
        OnClickProc();
    };
    
    var OnMousedown = function(){
        if(BtnSelecter == null){
            BtnSelecter = $target.selector;
        }
        else if(BtnSelecter != $target.selector){
            return;
        }
        // マウスダウン状態を保持
        isMouseDown = true;
    
        if( dl30_dev_id == 2 && chEnable == 0 ){
            $('#message').data('alert')('操作できません');
    
            // 操作できない場合はマウスダウン状態を解除
            isMouseDown = false;
        } else {
            // 出力
            //var value = $target.data('switch') == 1 ? 'OFF' : 'ON';
            var value = 'ON';
            $(window).trigger('onWriteData', [onType, onChNo, value]);
        }
    };
    
    var OnMouseupMouseleave = function(){
        if(BtnSelecter != $target.selector){
            return;
        }
        if (!isMouseDown) {
            return;
        }
    
        isMouseDown = false;
    
        if( dl30_dev_id == 2 && chEnable == 0 ){
            $('#message').data('alert')('操作できません');
        } else {
            // 出力
            //var value = $target.data('switch') == 1 ? 'ON' : 'OFF';
            var value = 'OFF';
            $(window).trigger('onWriteData', [onType, onChNo, value]);
        }
        BtnSelecter = null;
    };
    var OnTouchStart = function(ev){
    	OnMousedown();
    	ev.preventDefault();
    }
    var OnTouchEndCancel = function(ev){
    	OnMouseupMouseleave();
    	ev.preventDefault();
    }
    
    var isMouseDown = false;
    if (mode == 'ON' || mode == 'OFF' || mode == 'ALT') {
    	if( (window.PointerEvent) || (window.navigator.pointerEnabled) ){
            $target.bind('pointerdown', OnPointerdown);
            $target.bind('pointerup', OnPointerup);
        }
        else {
            $target.bind('click', OnClick);
        }
    } else if (mode == 'MOM') {
        if( (window.PointerEvent) || (window.navigator.pointerEnabled) ){
            $target.bind('pointerdown', OnMousedown);
            $target.bind('pointerup pointerleave', OnMouseupMouseleave);
        }
        else{
            $target.bind('touchstart', OnTouchStart);
            $target.bind('touchend touchcancel', OnTouchEndCancel);
            $target.bind('mousedown', OnMousedown);
            $target.bind('mouseup mouseleave', OnMouseupMouseleave);
        }
    }
    
    $(window).on('onLoad', function(){
        setProp(defaultDispMode);
    });
  })();
  (function(){
    var $target  = $('#Label_013');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Label_014');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  (function(){
    var $target  = $('#Label_015');
    var bgImage  = "" ? $('<img/>').prop('src', "") : null;
    var bgRepeat = "";
    
    $(window).on('onLoad', function(){
        if (bgImage) {
            switch (bgRepeat) {
                case 'stretch':
                    bgRepeat = '100% 100%';
                    break;
                case 'repeat-x':
                    bgRepeat = '100% ' + bgImage.prop('height') + 'px';
                    break;
                case 'repeat-y':
                    bgRepeat = bgImage.prop('width') + 'px 100%';
                    break;
                default:
                    bgRepeat = 'auto';
                    break;
            }
            $target.css('background-image', 'url(' + bgImage.prop('src') + ')')
                    .css('background-size', bgRepeat);
        }
    });
  })();
  window.onload = function(){
    $(window).trigger('onLoad');
    getAllData();
  };
});
