
$(document).ready(function () {
    $('#C_Path').val('/');



    function setCookie(cname, cvalue, exdays, cpath) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path="+ cpath;
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


$("#C_Set").click(function () {
    $('.cexist').remove();


    $('.input-group').css('cursor','wait');
    $('.main').css('cursor','wait');


    $('input').css('background-image','none');

    if(
        $('#C_Name').val().replace(' ','') !== '' && $('#C_Content').val().replace(' ','') !== ''
        && $('#C_Path').val().replace(' ','') !== '' &&
        $('#C_Expire').val().replace(' ','') !== '' ){
        $('input').prop("disabled","true");
        $('.input-group').append('<svg class="loader" width="100" height="10" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">\n' +
            '    <circle cx="15" cy="15" r="15">\n' +
            '        <animate attributeName="r" from="15" to="15"\n' +
            '                 begin="0s" dur="0.8s"\n' +
            '                 values="15;9;15" calcMode="linear"\n' +
            '                 repeatCount="indefinite" />\n' +
            '        <animate attributeName="fill-opacity" from="1" to="1"\n' +
            '                 begin="0s" dur="0.8s"\n' +
            '                 values="1;.5;1" calcMode="linear"\n' +
            '                 repeatCount="indefinite" />\n' +
            '    </circle>\n' +
            '    <circle cx="60" cy="15" r="9" fill-opacity="0.3">\n' +
            '        <animate attributeName="r" from="9" to="9"\n' +
            '                 begin="0s" dur="0.8s"\n' +
            '                 values="9;15;9" calcMode="linear"\n' +
            '                 repeatCount="indefinite" />\n' +
            '        <animate attributeName="fill-opacity" from="0.5" to="0.5"\n' +
            '                 begin="0s" dur="0.8s"\n' +
            '                 values=".5;1;.5" calcMode="linear"\n' +
            '                 repeatCount="indefinite" />\n' +
            '    </circle>\n' +
            '    <circle cx="105" cy="15" r="15">\n' +
            '        <animate attributeName="r" from="15" to="15"\n' +
            '                 begin="0s" dur="0.8s"\n' +
            '                 values="15;9;15" calcMode="linear"\n' +
            '                 repeatCount="indefinite" />\n' +
            '        <animate attributeName="fill-opacity" from="1" to="1"\n' +
            '                 begin="0s" dur="0.8s"\n' +
            '                 values="1;.5;1" calcMode="linear"\n' +
            '                 repeatCount="indefinite" />\n' +
            '    </circle>\n' +
            '</svg>')
        if (getCookie($('#C_Name').val()) === ''){

            setCookie($('#C_Name').val(),$('#C_Content').val(),$('#C_Expire').val(), $('#C_Path').val())
        } else {

            $('.input-group').append('<span class="cexist">Cookie Exist!</span>')


        }


        setTimeout(function () {
            $('input').val('');
            $('#C_Path').val('/');
            $('#C_Set').val('Submit')
            $('.loader').remove();
            $('input').removeAttr("disabled")
            $('.input-group').css('cursor','auto');
            $('.main').css('cursor','auto');
        },1000)



    }else {

        function Alert(ID) {
            $(ID).css('back' +
                'ground-repeat','no-repeat').css('background-position','right').css('background-size','30px').css('background' +
                '-position-x','94%').css('background-position-y','40%').css('background-image','url("data:image/svg+xml;base64,' +
                'PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8v' +
                'd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzI' +
                'gMTcyIj48ZyB0cmFuc2Zvcm09IiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aW' +
                'R0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb' +
                '2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250' +
                'LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0' +
                'xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZmQyOTExIj48cGF0aCBkPSJNODYsMzEuNzExOTdjLTQuOTcxOD' +
                'csMCAtOS4yNzI5MiwyLjU1MzEzIC0xMS44MjYwNSw2LjcxODc1bC00OC41MDg4NSw4MS4wMjkxOGMtMi41NTMxMyw0LjMgLTIuNjg2OTcsOS' +
                '41MzkwNSAtMC4xMzM4NSwxMy44MzkwNWMyLjQxODc1LDQuMyA2Ljg1NDE3LDYuOTg5MDcgMTEuODI2MDUsNi45ODkwN2g5Ny4xNTE1NWM0Lj' +
                'k3MTg4LDAgOS41NDExNSwtMi41NTQ3IDExLjk1OTksLTYuOTg5MDdjMi40MTg3NSwtNC4zIDIuNDE5MjcsLTkuNTM5MDUgLTAuMTMzODUsLT' +
                'EzLjgzOTA1bC00OC41MDg4NSwtODEuMDI5MThjLTIuNTUzMTMsLTQuMTY1NjIgLTYuODU0MTcsLTYuNzE4NzUgLTExLjgyNjA1LC02LjcxO' +
                'Dc1ek04NiwzOS43NzQ0N2MyLjAxNTYzLDAgMy43NjE5NywwLjk0MDEgNC44MzY5NywyLjgyMTM1bDQ4LjY0NTMyLDgxLjAyOTE3YzEuMDc1' +
                'LDEuNzQ2ODggMS4wNzQ0OCwzLjg5NzkyIDAuMTMzODUsNS43NzkxN2MtMS4wNzUsMS43NDY4NyAtMi44MjM0NSwyLjgyMTM1IC00Ljk3MzQ' +
                '1LDIuODIxMzVoLTk3LjI4NTRjLTIuMDE1NjIsMCAtMy44OTg0NSwtMS4wNzQ0OCAtNC45NzM0NSwtMi44MjEzNWMtMS4wNzUsLTEuNzQ2OD' +
                'cgLTAuOTQxMTUsLTQuMDMyMyAwLjEzMzg1LC01Ljc3OTE3bDQ4LjY0NTMyLC04MS4wMjkxN2MxLjA3NSwtMS43NDY4OCAyLjgyMTM1LC0yL' +
                'jgyMTM1IDQuODM2OTcsLTIuODIxMzV6TTg2LDY2LjI0NzkyYy0yLjI4NDM3LDAgLTQuMDMxMjUsMS43NDY4OCAtNC4wMzEyNSw0LjAzMTI1' +
                'djI4LjIxODc1YzAsMi4yODQzOCAxLjc0Njg4LDQuMDMxMjUgNC4wMzEyNSw0LjAzMTI1YzIuMjg0MzcsMCA0LjAzMTI1LC0xLjc0Njg3IDQ' +
                'uMDMxMjUsLTQuMDMxMjV2LTI4LjIxODc1YzAsLTIuMjg0MzcgLTEuNzQ2ODgsLTQuMDMxMjUgLTQuMDMxMjUsLTQuMDMxMjV6TTg2LDEwOC' +
                '4xNzE4OGMtMi4yMjY0LDAgLTQuMDMxMjUsMS44MDQ4NSAtNC4wMzEyNSw0LjAzMTI1YzAsMi4yMjY0IDEuODA0ODUsNC4wMzEyNSA0LjAzM' +
                'TI1LDQuMDMxMjVjMi4yMjY0LDAgNC4wMzEyNSwtMS44MDQ4NSA0LjAzMTI1LC00LjAzMTI1YzAsLTIuMjI2NCAtMS44MDQ4NSwtNC4wMzEyN' +
                'SAtNC4wMzEyNSwtNC4wMzEyNXoiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=")')

        }


    if($('#C_Name').val().replace(' ','')===''){
        Alert('#C_Name');

    }
    if ($('#C_Content').val().replace(' ','')===''){
        Alert('#C_Content');

    }
    if ($('#C_Domain').val().replace(' ','')===''){
        Alert('#C_Domain');

    }
    if ($('#C_Path').val().replace(' ','')===''){
        Alert('#C_Path');

    }
    if ($('#C_Expire').val().replace(' ','')===''){
        Alert('#C_Expire');

    }


    }

    $('.main').css('cursor','auto');
    $('.input-group').css('cursor','auto');

});
});