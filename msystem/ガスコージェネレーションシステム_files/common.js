/* data_ma */
var data_ma_mes = "Output MA";
var data_ma_success = "OK";

/* data_md */
var data_md_mes = "Output MD";
var data_md_success = "OK";

/* data_ao */
var data_ao_mes = "Output AO";
var data_ao_success = "OK";

/* data_do */
var data_do_mes = "Output DO";
var data_do_success = "OK";

/* data_gdo */
var data_gdo_mes = "Output GDO";
var data_gdo_success = "OK";

/**
* カンマ編集＆小数点以下桁数で四捨五入
* 
* p1:str   対象文字列
* p2:keta  小数点以下桁数
* p3:comma カンマ編集有無
*/
function formatValue(str, keta, comma) {
    // 数値(小数点、マイナスを含む)以外は削除
    var n = Number(String(str).replace(/[^0-9.-]/g, ""));
    if (!$.isNumeric(n)) {
        n = 0;
    }

    // 小数点以下N桁にする
    n *= Math.pow(10, keta);
    n = Math.round(n * 10) / 10;
    n = (n > 0) ? Math.floor(n) :  Math.ceil(n);
    n /= Math.pow(10, keta);
    n = n.toFixed(keta);

    if (comma) {
        // カンマ編集あり
        //return String(n).replace(/^([+-]?\d+)(\d{3})/, "$1,$2");
        return String(n).replace(/^(-?[0-9]+)(?=\.|$)/, function (s) {
            return s.replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
        });
    } else {
        // カンマ編集なし
        return String(n);
    }
}

jQuery(function ($) {
    // IE対応
    $.ajaxSetup({
        cache: false,
        timeout: 60000,
    });

    var $msgbox = $('#message');
    // メッセージを閉じる
    function closemsg(ok) {
        var method;
        if (ok && $msgbox.data('check')) {
            if ($msgbox.find('.text').text($msgbox.data('check')()).text() !== '') {
                return;
            }
        }
        if (ok && $msgbox.data('ok')) {
            method = $msgbox.data('ok');
        } else if ($msgbox.data('cancel')) {
            method = $msgbox.data('cancel');
        }
        $msgbox.hide().removeData(['check', 'ok', 'cancel']);
        if (method) {
            method();
        }
    }
    $(document).keydown(function (e) {
        if (e.key == 'Escape' || e.key == 'Esc') {
            closemsg();
        }
    });
    $msgbox
        // OK
        .submit(function () {
            closemsg(true);
            return false;
        })
        // キャンセル、閉じる
        .find('.cancel, .close').click(function () {
            closemsg();
            return false;
        }).end()
        // 数値入力
        .data('number', function (text, keta, check, ok, cancel) {
            closemsg();
            $msgbox
                .removeClass('confirm alert').addClass('input')
                .find('.number input').val(text).prop('step', '0.00'.slice(0, keta ? keta + 1 : 0) + '1').end()
                .find('.text').text('').end()
                .find('.time').text('').end()
                .css('left', ($(window).width() - $msgbox.outerWidth()) / 2 + 'px')
                .css('top', ($(window).height() - $msgbox.outerHeight()) / 2 + 'px')
                .data('check', check ? check : null)
                .data('ok', ok ? ok : null)
                .data('cancel', cancel ? cancel : null)
                .show('fast', function () {
                    $(this).find('.number input').focus();
                });
        })
        // 確認
        .data('confirm', function (text, ok, cancel) {
            closemsg();
            $msgbox
                .removeClass('input alert').addClass('confirm')
                .find('.text').text(text).end()
                .find('.time').text(new Date().toLocaleString()).end()
                .css('left', ($(window).width() - $msgbox.outerWidth()) / 2 + 'px')
                .css('top', ($(window).height() - $msgbox.outerHeight()) / 2 + 'px')
                .data('check', null)
                .data('ok', ok ? ok : null)
                .data('cancel', cancel ? cancel : null)
                .show('fast', function () {
                    $(this).find('.ok').focus();
                });
        })
        // エラー
        .data('alert', function (text, ok) {
            closemsg();
            $msgbox
                .removeClass('input confirm').addClass('alert')
                .find('.text').text(text).end()
                .find('.time').text(new Date().toLocaleString()).end()
                .css('left', ($(window).width() - $msgbox.outerWidth()) / 2 + 'px')
                .css('top', ($(window).height() - $msgbox.outerHeight()) / 2 + 'px')
                .data('check', null)
                .data('ok', null)
                .data('cancel', ok ? ok : null)
                .show('fast', function () {
                    $(this).find('.ok').focus();
                });
        });
});


/* comment(xml_cmd) */
var xml_cmd_time_out = '応答がないか、処理に時間がかかっています';

