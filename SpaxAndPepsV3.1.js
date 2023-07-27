function setupUI() {
    var _0xf662x2 = document['createElement']('style');
    _0xf662x2['type'] = 'text/css';
    var _0xf662x3 = `${'\x0D\x0A        #modmenu {\x0D\x0A            background-color: #282b30;\x0D\x0A            border: none;\x0D\x0A            border-radius: 10px;\x0D\x0A            margin-top: 100px;\x0D\x0A            margin-right: -40px;\x0D\x0A            padding-left: 10px;\x0D\x0A        }\x0D\x0A\x0D\x0A        #modmenuclosebtn {\x0D\x0A            scale: 1;\x0D\x0A            margin-top: 84px;\x0D\x0A            margin-right: 117px;\x0D\x0A            background: url("https://i.imgur.com/xDFW0d6.png");\x0D\x0A			background-size: contain;\x0D\x0A			position: absolute;\x0D\x0A			left: -3%;\x0D\x0A			top: -14%;\x0D\x0A\x0D\x0A\x0D\x0A        }\x0D\x0A\x0D\x0A        #modmenutitle {\x0D\x0A            color: #7289da;\x0D\x0A            margin-bottom: 10px;\x0D\x0A        }\x0D\x0A\x0D\x0A        #modmenusubtitle {\x0D\x0A            color: #ffffff;\x0D\x0A        }\x0D\x0A\x0D\x0A        #modmenu .buttons {\x0D\x0A            display: flex;\x0D\x0A            flex-direction: column;\x0D\x0A            align-items: center;\x0D\x0A            margin: -5px;\x0D\x0A            margin-right: 3%;\x0D\x0A            width: 100%;\x0D\x0A        }\x0D\x0A\x0D\x0A        #modmenu .buttons button {\x0D\x0A            margin: 5px;\x0D\x0A            padding: 5px 10px;\x0D\x0A            background-color: #7289da;\x0D\x0A            color: white;\x0D\x0A            border: none;\x0D\x0A            border-radius: 5px;\x0D\x0A            margin: 3px;\x0D\x0A            width: 90%;\x0D\x0A            cursor: pointer;\x0D\x0A        }\x0D\x0A    '}`;
    if (_0xf662x2['styleSheet']) {
        _0xf662x2['styleSheet']['cssText'] = _0xf662x3
    } else {
        _0xf662x2['appendChild'](document['createTextNode'](_0xf662x3))
    };
    document['head']['appendChild'](_0xf662x2);
    var _0xf662x4 = document['getElementById']('modmenu');
    var _0xf662x5 = document['createElement']('div');
    _0xf662x5['id'] = 'modmenutitle';
    _0xf662x5['textContent'] = 'Extras\uD83D\uDE09';
    var _0xf662x6 = document['createElement']('div');
    _0xf662x6['classList']['add']('buttons');
    _0xf662x4['appendChild'](_0xf662x5);
    _0xf662x4['appendChild'](document['createElement']('br'));
    _0xf662x4['appendChild'](document['createElement']('br'));
    _0xf662x4['appendChild'](document['createElement']('br'));
    _0xf662x4['appendChild'](_0xf662x6);
    var _0xf662x7 = document['createElement']('div');
    _0xf662x7['style'] = 'height: 50px; width: 120px; position: absolute; border-radius: 25px; border: 2px solid blue; background: gray; text-align: center; color: white;';
    _0xf662x7['innerText'] = 'Youtube';
    document['querySelector']('#main-menu')['append'](_0xf662x7);
    _0xf662x7['style']['top'] = '35px';
    _0xf662x7['style']['right'] = '5px';
    _0xf662x7['style']['backgroundSize'] = '100% 100%';
    _0xf662x7['setAttribute']('class', 'NVKT YT Save Ukrania');
    _0xf662x7['onclick'] = () => {
        window['open']('https://youtube.com/@NVKT_LEGEND')
    };
    _0xf662x7['style']['cursor'] = 'pointer';
    var _0xf662x8 = document['createElement']('div');
    _0xf662x8['style'] = 'height: 50px; width: 120px; position: absolute; top: -15px; right: 5px; border: 2px solid blue; border-radius: 25px; background: gray; text-align: center; color: white;';
    _0xf662x8['innerText'] = 'Discord';
    document['querySelector']('#main-menu')['append'](_0xf662x8);
    _0xf662x8['onclick'] = () => {
        window['open']('https://discord.gg/GpUTWJncNj')
    };
    _0xf662x8['style']['cursor'] = 'pointer';
    _0xf662x8['style']['backgroundSize'] = '100% 100%';
    _0xf662x8['style']['backgroundRepeat'] = 'no-repeat';
    const _0xf662x9 = document['createElement']('img');
    const _0xf662xa = document['createElement']('p');
    const _0xf662xb = document['createTextNode']('NVKT SNAY MODMENU');
    const _0xf662xc = document['querySelector']('#title');
    _0xf662xc['src'] = 'https://media.discordapp.net/attachments/1117553652828229663/1134151017068499014/ED7EDDE1-1AB5-47B3-845C-BF23F14B461A.png';
    _0xf662xc['style']['position'] = 'absolute';
    _0xf662xc['style']['top'] = '-5%';
    _0xf662xa['appendChild'](_0xf662xb);
    _0xf662xa['style']['backgroundImage'] = 'linear-gradient(to right, #71797E, gray, #71797E)';
    _0xf662xa['style']['position'] = 'absolute';
    _0xf662xa['style']['left'] = '25%';
    _0xf662xa['style']['top'] = '5%';
    _0xf662xa['style']['color'] = 'white';
    _0xf662xa['style']['padding'] = '8px';
    _0xf662xa['style']['borderRadius'] = '25px';
    _0xf662xa['style']['opacity'] = '70%';
    _0xf662xa['style']['border'] = '1.5px solid black';
    _0xf662xa['style']['color'] = 'white';
    _0xf662x9['style']['backgroundColor'] = '#6495ED';
    _0xf662x9['style']['position'] = 'absolute';
    _0xf662x9['style']['left'] = '20%';
    _0xf662x9['style']['top'] = '5%';
    _0xf662x9['style']['borderRadius'] = '50%';
    _0xf662x9['style']['opacity'] = '70%';
';
    _0xf662x9['style']['height'] = '10%';
    _0xf662x9['style']['width'] = '6%';
    _0xf662x9['style']['border'] = '2px solid black';
    document['querySelector']('#deco1')['style']['opacity'] = '0%';
    document['querySelector']('#deco2')['style']['opacity'] = '0%';
    document['querySelector']('#deco3')['style']['opacity'] = '0%';
    document['querySelector']('#deco4')['style']['opacity'] = '0%';
    document['querySelector']('#signin-btn')['src'] = 'http://www.clker.com/cliparts/d/u/w/y/F/1/thin-gray-signin-button-hi.png';
    document['querySelector']('#HUD')['appendChild'](_0xf662x9);
    document['querySelector']('#HUD')['appendChild'](_0xf662xa);
    _0xf662xa['classList']['add']('NewHud');
    document['querySelector']('#seasons-body')['style']['backgroundColor'] = 'black';
    document['querySelector']('#seasons-header')['style']['backgroundColor'] = 'black';
    document['querySelector']('#store-body')['style']['backgroundColor'] = 'black';
    document['querySelector']('#store-header')['style']['backgroundColor'] = 'black';
    document['querySelector']('#gallery-content')['style']['background'] = 'black';
    document['querySelector']('#gallery-header')['style']['backgroundColor'] = 'black';
    document['querySelector']('#gallery-body')['style']['backgroundImage'] = 'linear-gradient(to bottom, black, darkblue, black)';
    document['querySelector']('.windowclosebtn')['style']['filter'] = 'hue-rotate(200deg)';
    document['querySelector']('#settings-body')['style']['backgroundImage'] = 'linear-gradient(to bottom, black, darkblue, black)';
    document['querySelector']('#Settings-common')['style']['backgroundColor'] = '#818589';
    document['querySelector']('#Settings-common')['style']['borderRadius'] = '25px';
    document['querySelector']('#settings-header')['style']['backgroundColor'] = 'black';
    document['querySelectorAll']('.windowclosebtn')['forEach']((_0xf662xd) => {
        _0xf662xd['style']['filter'] = 'hue-rotate(200deg)'
    });
    document['querySelector']('#Settings-quality')['style']['backgroundColor'] = '#818589';
    document['querySelector']('#Settings-quality')['style']['borderRadius'] = '25px';
    document['querySelector']('#Settings-input')['style']['backgroundColor'] = '#818589';
    document['querySelector']('#Settings-input')['style']['borderRadius'] = '25px';
    document['querySelector']('#keys')['style']['backgroundColor'] = 'lightgray';
    document['querySelector']('#keys')['style']['borderRadius'] = '25px'
}

function setupCustomSkins() {
    var _0xf662xf = ['https://cdn.discordapp.com/attachments/1121201461133574156/1132423079402942567/image.png', 'https://cdn.discordapp.com/attachments/1121201461133574156/1132423279508996196/IMG_1030.png'];

    function _0xf662x10(_0xf662x11) {
        var _0xf662x12 = false;
        var _0xf662x13 = document['querySelector']('.customSkinContainer')['children'];
        for (let i = 0; i < _0xf662x13['length']; i++) {
            if (_0xf662x11 != _0xf662x13[i]['src']) {
                _0xf662x12 = false
            } else {
                _0xf662x12 = true;
                break
            }
        };
        return _0xf662x12
    }
    var _0xf662x15 = document['querySelector']('label[for=\'custom-skin\']')['nextElementSibling']['querySelector']('ul');
    var _0xf662x16 = document['createElement']('ul');
    _0xf662x16['setAttribute']('class', 'window-body');
    _0xf662x16['classList']['add']('customSkinContainer');
    var _0xf662x17 = document['createElement']('button');
    var _0xf662x18 = document['createTextNode']('Save');
    _0xf662x17['append'](_0xf662x18);
    _0xf662x17['style'] = 'height: 50px; width: 100px; background: lightgreen; border-radius: 25px;';
    _0xf662x17['onclick'] = () => {
        if (document['querySelector']('#customSkin')['value'] && !_0xf662x10(document['querySelector']('#customSkin')['value'])) {
            _0xf662x1d('Skin' + document['querySelector']('.customSkinContainer')['children']['length'], document['querySelector']('#customSkin')['value'], 1);
            if (localStorage['getItem']('customSkins')) {
                localStorage['setItem']('customSkins', localStorage['getItem']('customSkins') + ', ' + document['querySelector']('#customSkin')['value'])
            } else {
                localStorage['setItem']('customSkins', document['querySelector']('#customSkin')['value'])
            }
        }
    };
    var _0xf662x19 = document['createElement']('button');
    var _0xf662x1a = document['createTextNode']('Kayıtlı Rastgele Skini Sil');
    _0xf662x19['append'](_0xf662x1a);
    _0xf662x19['style'] = 'height: 50px; width:fit-content; background: red; border-radius: 25px; color: white;';
    _0xf662x19['onclick'] = () => {
        if (localStorage['getItem']('customSkins')) {
            var _0xf662x1b = localStorage['getItem']('customSkins')['split'](',');
            _0xf662x1b['pop']();
            localStorage['setItem']('customSkins', _0xf662x1b);
            document['querySelectorAll']('.custom')[document['querySelectorAll']('.custom')['length'] - 1]['remove']()
        }
    };
    var _0xf662x1c = document['createElement']('li');
    _0xf662x1c['style'] = 'display: flex; height: fit-content; width: 100%; flex-direction: row';
    _0xf662x15['append'](document['createElement']('br'));
    _0xf662x1c['style']['justifyContent'] = 'center';
    _0xf662x16['append'](_0xf662x1c);
    _0xf662x1c['append'](_0xf662x17);
    _0xf662x1c['append'](_0xf662x19);
    _0xf662x15['append'](document['createElement']('br'));
    _0xf662x15['append'](_0xf662x16);

    function _0xf662x1d(_0xf662x1e, _0xf662x1f, _0xf662x20) {
        var _0xf662x21 = document['createElement']('img');
        if (_0xf662x20 == 0) {
            _0xf662x21['setAttribute']('class', _0xf662x1e)
        } else {
            if (_0xf662x20 == 1) {
                _0xf662x21['classList']['add'](_0xf662x1e);
                _0xf662x21['classList']['add']('custom')
            }
        };
        _0xf662x15['style'] = '';
        _0xf662x21['classList']['add']('circular');
        _0xf662x16['append'](_0xf662x21);
        _0xf662x16['style']['overflow'] = 'visible';
        document['querySelector']('.' + _0xf662x1e)['src'] = _0xf662x1f;
        document['querySelector']('.' + _0xf662x1e)['style'] = 'height: 150px; width: 150px; border-radius: 50%; cursor: pointer; border: 1.5px solid blue; border-style: dotted; margin: 5px;';
        document['querySelector']('.' + _0xf662x1e)['onclick'] = () => {
            settings['customSkin'] = _0xf662x1f;
            connect(settings['server']);
            document['querySelector']('.windowclosebtn')['click']()
        }
    }
    if (_0xf662xf) {
        for (let i = 0; i < _0xf662xf['length']; i++) {
            _0xf662x1d('Skin' + i, _0xf662xf[i], 0)
        }
    };
    if (localStorage['getItem']('customSkins')) {
        var _0xf662x22 = localStorage['getItem']('customSkins')['split'](',');
        for (let i = 0; i < _0xf662x22['length']; i++) {
            _0xf662x1d('Skin' + document['querySelector']('.customSkinContainer')['children']['length'], _0xf662x22[i], 1)
        }
    }
}

function setupModMenu() {
    function _0xf662x24(_0xf662x25, _0xf662x26, _0xf662x27, _0xf662x28) {
        var _0xf662x29 = document['createElement']('button');
        _0xf662x29['setAttribute']('id', _0xf662x25);
        document['querySelector']('.buttons')['append'](_0xf662x29);
        var _0xf662x2a = document['createElement']('output');
        _0xf662x2a['style']['color'] = 'white';
        _0xf662x2a['setAttribute']('id', _0xf662x25 + 'OutputValue');
        _0xf662x29['append'](_0xf662x2a);
        var _0xf662x2b = document['createTextNode'](_0xf662x28 + ': On');
        var _0xf662x2c = document['createTextNode'](_0xf662x28 + ': Off');
        if (_0xf662x26 == 'off') {
            if (localStorage['getItem'](_0xf662x27)) {
                _0xf662x29['setAttribute']('class', 'on');
                _0xf662x2a['append'](_0xf662x2b);
                _0xf662x29['style']['filter'] = 'brightness(100%)'
            } else {
                _0xf662x2a['append'](_0xf662x2c);
                _0xf662x29['style']['filter'] = 'brightness(70%)'
            }
        } else {
            if (_0xf662x26 == 'on') {
                if (localStorage['getItem'](_0xf662x27)) {
                    _0xf662x2a['append'](_0xf662x2c);
                    _0xf662x29['style']['filter'] = 'brightness(70%)'
                } else {
                    _0xf662x29['setAttribute']('class', 'on');
                    _0xf662x2a['append'](_0xf662x2b);
                    _0xf662x29['style']['filter'] = 'brightness(100%)'
                }
            }
        };
        _0xf662x29['onclick'] = () => {
            if (_0xf662x25 == 'soundEffectsBtn') {
                soundEffects()
            };
            if (_0xf662x26 == 'off') {
                if (document['querySelector']('button#' + _0xf662x25 + '.on')) {
                    localStorage['removeItem'](_0xf662x27);
                    _0xf662x29['style']['filter'] = '';
                    _0xf662x29['removeAttribute']('class');
                    _0xf662x29['style']['filter'] = 'brightness(70%)';
                    _0xf662x2a['firstChild']['remove']();
                    _0xf662x2a['append'](_0xf662x2c)
                } else {
                    if (!document['querySelector']('button#' + _0xf662x25 + '.on')) {
                        localStorage['setItem'](_0xf662x27, 'true');
                        _0xf662x29['removeAttribute']('class');
                        _0xf662x29['setAttribute']('class', 'on');
                        _0xf662x2a['firstChild']['remove']();
                        _0xf662x29['style']['filter'] = 'brightness(100%)';
                        _0xf662x2a['append'](_0xf662x2b)
                    }
                }
            } else {
                if (_0xf662x26 == 'on') {
                    if (document['querySelector']('button#' + _0xf662x25 + '.on')) {
                        localStorage['setItem'](_0xf662x27, 'true');
                        _0xf662x2a['firstChild']['remove']();
                        _0xf662x2a['append'](_0xf662x2c);
                        _0xf662x29['style']['filter'] = '';
                        _0xf662x29['style']['filter'] = 'brightness(70%)';
                        _0xf662x29['removeAttribute']('class')
                    } else {
                        if (!document['querySelector']('button#' + _0xf662x25 + '.on')) {
                            localStorage['removeItem'](_0xf662x27);
                            _0xf662x2a['firstChild']['remove']();
                            _0xf662x2a['append'](_0xf662x2b);
                            _0xf662x29['style']['filter'] = 'brightness(100%)';
                            _0xf662x29['setAttribute']('class', 'on')
                        }
                    }
                }
            }
        };
        _0xf662x29['style']['borderRadius'] = '5px';
        _0xf662x29['style']['padding'] = '10px';
        _0xf662x29['style']['transition'] = 'all 1s ease';
        _0xf662x2a['style']['transition'] = 'all 2s ease';
        return _0xf662x29
    }
    var _0xf662x2d = _0xf662x24('press4Btn', 'off', 'press4On', '4 key respawn');
    var _0xf662x2e = _0xf662x24('soundEffectsBtn', 'on', 'SoundEffectsOn', 'Goofy ah Sounds');
    var _0xf662x2f = _0xf662x24('spamLastEmoteBtn', 'off', 'spamLastEmoteOn', 'Spam Recent Emoji');
    var _0xf662x30 = _0xf662x24('spamEmojiBtn', 'off', 'spamEmojisOn', 'Spam All Emojis');
    var _0xf662x31 = _0xf662x24('emojiBindings', 'on', 'emojiBindsOff', 'Emoji Keybinds');
    var _0xf662x32 = _0xf662x24('respawnButton', 'on', 'respawnBtnOff', 'Automatic Respawn');
    document['querySelector']('.buttons')['append'](document['querySelector']('#modmenu')['querySelector']('.button-81'));
    document['querySelector']('#modmenu')['querySelector']('.button-81')['style']['padding'] = '10px';
    document['querySelector']('#modmenu')['querySelector']('.button-81')['style']['background'] = 'gray'
}
window['addEventListener']('load', () => {
    if (localStorage['getItem']('seenShill')) {} else {
        swal('Please consider checking out my Patreon!');
        localStorage['setItem']('seenShill', '1')
    };
    setTimeout(() => {
        var _0xf662x33 = document['querySelector']('#overlays.fade-in');
        var _0xf662x34 = document['createElement']('img');
        _0xf662x34['style']['height'] = '100%';
        _0xf662x34['style']['width'] = '100%';
        _0xf662x34['src'] = 'https://github.com/GravityGYT/Script/blob/main/download.jpg?raw=true';
        _0xf662x34['zIndex'] = '3';
        _0xf662x33['appendChild'](_0xf662x34);
        _0xf662x34['style']['position'] = 'absolute'
    }, 3000);
    document['querySelector']('#title')['style']['zIndex'] = '2';
    document['querySelector']('button#play-btn')['style']['backgroundImage'] = 'url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YouTube_play_buttom_dark_icon_%282013-2017%29.svg/800px-YouTube_play_buttom_dark_icon_%282013-2017%29.svg.png\')';
    document['querySelector']('button#spectate-btn')['style']['backgroundImage'] = 'url(\'https://www.freeiconspng.com/uploads/eye-icon--icon-search-engine-17.png\')';
    document['querySelector']('button#spectate-btn')['style']['border'] = '3px solid white';
    document['querySelector']('button#spectate-btn')['style']['backgroundColor'] = 'gray';
    document['querySelector']('button#settings-btn')['style']['backgroundImage'] = 'url(\'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png\')';
    document['querySelector']('button#settings-btn')['style']['backgroundImage'] = 'url(\'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png\')';
    document['querySelector']('#settings-btn')['style']['backgroundColor'] = 'gray';
    document['querySelector']('#modmenu')['style']['height'] = 'fit-content';
    document['querySelector']('label[for=\'custom-skin\']')['nextElementSibling']['querySelector']('li')['style']['height'] = ''
});

function setupEmojiSettings() {
    var _0xf662x36 = document['querySelector']('.react-horizontal-scrolling-menu--scroll-container')['querySelectorAll']('img');
    var _0xf662x37 = [];
    var _0xf662x38 = document['createElement']('span');
    _0xf662x38['innerText'] = 'Custom Emoji Keybinds';
    _0xf662x38['setAttribute']('class', 'emojiBindTitle');
    var _0xf662x39 = document['createElement']('div');
    _0xf662x39['style'] = 'background: red; border-radius: 15px; color: white; height: fit-content: width: fit-content; cursor: pointer;';
    _0xf662x39['innerText'] = 'Restore default emoji Keybinds';
    _0xf662x39['setAttribute']('class', 'restoreEmojiBinds');
    document['querySelector']('#keys')['append'](_0xf662x38);
    document['querySelector']('#keys')['append'](_0xf662x39);
    _0xf662x39['onclick'] = () => {
        var _0xf662x3a = document['querySelector']('#keys')['querySelectorAll']('button');
        for (let i = 0; i < _0xf662x3a['length']; i++) {
            if (localStorage['getItem'](_0xf662x3a[i]['className'])) {
                localStorage['removeItem'](_0xf662x3a[i]['className'])
            };
            _0xf662x3a[i]['innerText'] = ''
        };
        var _0xf662x3b = ['1', '2', 'c', 'v', 'a', 's', 'd', 'x', '!', 'z', '@', 'A', 'S', 'D', 'Z', 'X', 'C', 'V'];
        for (let i = 0; i < _0xf662x3b['length']; i++) {
            _0xf662x3a[i]['innerText'] = _0xf662x3b[i]
        }
    };
    for (let i = 0; i < _0xf662x36['length']; i++) {
        _0xf662x37['push'](_0xf662x36[i]['src'])
    };
    for (let i = 0; i < _0xf662x37['length']; i++) {
        var _0xf662x3c = document['createElement']('img');
        var _0xf662x3d = document['createElement']('button');
        _0xf662x3d['style'] = 'width: 50px; height: 50px;';
        _0xf662x3d['setAttribute']('class', 'emojiBind' + i);
        _0xf662x3c['src'] = _0xf662x37[i];
        _0xf662x3c['style'] = 'height: 50px; width: 50px; border-radius: 50%; border: 1px solid blue; transform: translate(100px, 0px);';
        _0xf662x3c['setAttribute']('class', 'emoji' + i);
        document['querySelector']('#keys')['append'](_0xf662x3c);
        document['querySelector']('#keys')['append'](_0xf662x3d)
    };
    var _0xf662x3a = document['querySelector']('#keys')['querySelectorAll']('button');
    for (let i = 0; i < _0xf662x3a['length']; i++) {
        const _0xf662x3e = (_0xf662x3f) => {
            if (_0xf662x3f['key'] == 'Backspace') {
                _0xf662x3a[i]['innerText'] = '';
                localStorage['setItem'](_0xf662x3a[i]['className'], ' ');
                _0xf662x3a[i]['removeEventListener']('keyup', _0xf662x3e)
            } else {
                _0xf662x3a[i]['innerText'] = _0xf662x3f['key'];
                localStorage['setItem'](_0xf662x3a[i]['className'], _0xf662x3a[i]['innerText']);
                _0xf662x3a[i]['removeEventListener']('keyup', _0xf662x3e)
            }
        };
        _0xf662x3a[i]['onclick'] = () => {
            _0xf662x3a[i]['addEventListener']('keyup', _0xf662x3e)
        }
    };
    var _0xf662x3b = ['1', '2', 'c', 'v', 'a', 's', 'd', 'x', '!', 'z', '@', 'A', 'S', 'D', 'Z', 'X', 'C', 'V'];
    for (let i = 0; i < _0xf662x3b['length']; i++) {
        _0xf662x3a[i]['innerText'] = _0xf662x3b[i]
    };
    for (let i = 0; i < _0xf662x3a['length']; i++) {
        if (localStorage['getItem'](_0xf662x3a[i]['className'])) {
            if (localStorage['getItem'](_0xf662x3a[i]['className']) == ' ') {
                _0xf662x3a[i]['innerText'] = ''
            } else {
                _0xf662x3a[i]['innerText'] = localStorage['getItem'](_0xf662x3a[i]['className'])
            }
        }
    }
}

function clearEmojisBinds() {
    document['querySelector']('.emojiBindTitle')['remove']();
    document['querySelector']('.restoreEmojiBinds')['remove']();
    document['querySelector']('#keys')['querySelectorAll']('button')['forEach']((_0xf662x41) => {
        _0xf662x41['remove']()
    });
    document['querySelector']('#keys')['querySelectorAll']('img')['forEach']((_0xf662x41) => {
        _0xf662x41['remove']()
    })
}

function refreshEmojiSettings() {
    clearEmojisBinds();
    setupEmojiSettings()
}

function createLoginEvent() {
    const _0xf662x44 = new MutationObserver(function() {
        const _0xf662x45 = document['querySelector']('#profile-btn.fade-in') !== null;
        if (_0xf662x45) {
            console['log']('Logged in, adding emojis settings');
            setTimeout(() => {
                if (!document['querySelector']('.emojiBindTitle')) {
                    setupEmojiSettings()
                }
            }, 5000)
        } else {
            console['log']('Logged out, removing emojis settings');
            clearEmojisBinds();
            document['querySelector']('#account-lvl')['innerText'] = '120';
            document['querySelector']('#account-xp')['innerText'] = '%0';
            document['querySelector']('#account-coins')['innerText'] = '3729103'
        }
    });
    const _0xf662x46 = document['querySelector']('#profile-btn');
    if (_0xf662x46) {
        _0xf662x44['observe'](_0xf662x46, {
            attributes: true,
            attributeFilter: ['class']
        })
    } else {
        console['error']('Target element not found.')
    }
}

function randomIntFromInterval(_0xf662x48, _0xf662x49) {
    return Math['floor'](Math['random']() * (_0xf662x49 - _0xf662x48 + 1) + _0xf662x48)
}

function loading() {
    document['addEventListener']('keypress', function(_0xf662x3f) {
        if (document['querySelector']('button#press4Btn.on')) {
            if (_0xf662x3f['key'] == '4') {
                if (document['querySelector']('#chat_textbox')['value'] == '') {
                    var _0xf662x4b = document['querySelector']('#overlays')['style'];
                    document['querySelector']('#overlays')['style']['display'] = 'none';
                    document['getElementById']('leaveBtn')['click']();
                    document['querySelector']('.swal-button--confirm')['click']();
                    document['querySelector']('#play-btn')['click']();
                    setTimeout(() => {
                        document['querySelector']('.swal-button--cancel')['click']()
                    }, 50);
                    setTimeout(() => {
                        document['querySelector']('#overlays')['style'] = _0xf662x4b
                    }, 1000)
                }
            }
        };
        if (document['querySelector']('button#emojiBindings.on')) {
            if (document['querySelector']('#keys')['querySelector']('button')) {
                var _0xf662x36 = document['querySelector']('.react-horizontal-scrolling-menu--scroll-container')['querySelectorAll']('img');
                var _0xf662x3a = document['querySelector']('#keys')['querySelectorAll']('button');
                var _0xf662x4c = [];
                for (let i = 0; i < _0xf662x3a['length']; i++) {
                    if (_0xf662x3a[i]['innerText']) {
                        _0xf662x4c['push'](_0xf662x3a[i])
                    }
                };
                var _0xf662x37 = [];
                for (let i = 0; i < _0xf662x36['length']; i++) {
                    _0xf662x37['push'](_0xf662x36[i]['src'])
                };
                for (let i = 0; i < _0xf662x4c['length']; i++) {
                    if (_0xf662x3a) {
                        if (_0xf662x4c[i]['innerText']) {
                            var _0xf662x4d = _0xf662x37[_0xf662x4c[i]['className']['split']('Bind')[1]]['replace']('https://www.snay.io', '.');
                            if (_0xf662x3f['key'] == _0xf662x4c[i]['innerText']) {
                                if (document['querySelector']('#chat_textbox')['value'] == '') {
                                    document['querySelector']('img[src=\'' + _0xf662x4d + '\']')['click']()
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

function soundEffects() {
    var _0xf662x4f = new Audio('https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/munch-sound-effect.mp3?raw=true');
    var _0xf662x50 = new Audio('https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/tmp_7901-951678082.mp3?raw=true');
    var _0xf662x51 = new Audio('https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/perfect-fart.mp3?raw=true');
    var _0xf662x52 = new Audio('https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/succ.mp3?raw=true');
    var _0xf662x53 = new Audio('https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/bigSplit.mov?raw=true');
    var _0xf662x54 = new Audio('https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/jixaw-metal-pipe-falling-sound.mp3?raw=true');
    var _0xf662x55;
    var _0xf662x56;
    var _0xf662x57;
    setInterval(() => {
        if (document['querySelector']('#soundEffectsBtn.on')) {
            if (window['stats']['virusesEaten'] > _0xf662x55) {
                _0xf662x54['pause']();
                _0xf662x54['currentTime'] = 0;
                _0xf662x54['play']()
            } else {
                if (window['stats']['cellsEaten'] > _0xf662x56) {
                    _0xf662x4f['pause']();
                    _0xf662x4f['currentTime'] = 0;
                    _0xf662x4f['play']()
                } else {
                    if (window['stats']['mycells'] > _0xf662x57 && window['stats']['mycells'] != 0 && _0xf662x57 != 0) {
                        if (window['stats']['score'] > 15000) {
                            _0xf662x51['pause']();
                            _0xf662x51['currentTime'] = 0;
                            _0xf662x53['pause']();
                            _0xf662x53['currentTime'] = 0;
                            _0xf662x53['play']()
                        } else {
                            _0xf662x53['pause']();
                            _0xf662x53['currentTime'] = 0;
                            _0xf662x51['pause']();
                            _0xf662x51['currentTime'] = 0;
                            _0xf662x51['play']()
                        }
                    }
                }
            };
            _0xf662x56 = window['stats']['cellsEaten'];
            _0xf662x55 = window['stats']['virusesEaten'];
            _0xf662x57 = window['stats']['mycells'];
            if (window['stats']['mycells'] == 0) {
                if (window['stats']['score'] > 15000) {
                    _0xf662x52['play']()
                } else {
                    _0xf662x50['play']()
                }
            }
        }
    })
}
var emojiInterval = setInterval(() => {
    var _0xf662x59 = document['querySelectorAll']('.react-horizontal-scrolling-menu--item');
    for (let i = 0; i < _0xf662x59['length']; i++) {
        _0xf662x59[i]['addEventListener']('click', (_0xf662x5a) => {
            if (_0xf662x5a) {
                localStorage['setItem']('lastEmote', _0xf662x59[i]['outerHTML']['split']('"')[3])
            }
        })
    };
    if (document['querySelector']('button#spamLastEmoteBtn.on')) {
        document['querySelector']('div[data-key=\'' + localStorage['getItem']('lastEmote') + '\']')['firstChild']['firstChild']['click']()
    };
    var _0xf662x5b;
    var _0xf662x36 = document['querySelectorAll']('.card');
    if (document['querySelector']('button#spamEmojiBtn.on')) {
        _0xf662x5b = randomIntFromInterval(0, _0xf662x36['length'] - 1);
        _0xf662x36[_0xf662x5b]['firstChild']['click']()
    }
}, 800);
var gameover = document['querySelector']('#game-over');
setInterval(() => {
    if (document['querySelector']('#chat')) {
        document['querySelector']('#chat')['querySelectorAll']('p')['forEach']((_0xf662xd) => {
            var _0xf662x5d = _0xf662xd;
            var _0xf662x5e = getComputedStyle(_0xf662x5d);
            var _0xf662x5f = _0xf662x5e['color'];
            var _0xf662x60 = _0xf662x5f['match'](/\d+/g);
            var _0xf662x61 = parseInt(_0xf662x60[0]);
            var _0xf662x62 = parseInt(_0xf662x60[1]);
            var _0xf662x63 = parseInt(_0xf662x60[2]);
            var _0xf662x64 = (_0xf662x61 * 299 + _0xf662x62 * 587 + _0xf662x63 * 114) / 600;
            if (_0xf662x64 < 128 && window['settings']['darkTheme'] == true) {
                var _0xf662x65 = 0.5;
                _0xf662x5d['style']['textShadow'] = `${'-'}${_0xf662x65}${'px -'}${_0xf662x65}${'px 0 white, '}${_0xf662x65}${'px -'}${_0xf662x65}${'px 0 white, -'}${_0xf662x65}${'px '}${_0xf662x65}${'px 0 white, '}${_0xf662x65}${'px '}${_0xf662x65}${'px 0 white'}`
            } else {
                _0xf662x5d['style']['textShadow'] = `${'-'}${_0xf662x65}${'px -'}${_0xf662x65}${'px 0 black, '}${_0xf662x65}${'px -'}${_0xf662x65}${'px 0 black, -'}${_0xf662x65}${'px '}${_0xf662x65}${'px 0 black, '}${_0xf662x65}${'px '}${_0xf662x65}${'px 0 black'}`
            }
        })
    };
    if (window['isbot'] == true) {
        signOut()
    } else {
        if (window['isbot'] == false) {
            window['focus']()
        }
    };
    if (document['querySelector']('button#respawnButton.on')) {
        if (document['querySelector']('#game-over')) {
            document['querySelector']('#game-over')['remove']()
        };
        if (stats['mycells'] == 0) {
            play()
        }
    } else {
        if (!document['querySelector']('#game-over')) {
            if (gameover) {
                document['querySelector']('#root')['append'](gameover)
            }
        }
    }
}, 400);
var modBtns = document['querySelector']('#modmenu')['querySelectorAll']('button');
for (let i = 0; i < modBtns['length']; i++) {
    modBtns[i]['addEventListener']('mouseenter', () => {
        modBtns[i]['style']['transform'] = 'scale(1.1)'
    });
    modBtns[i]['addEventListener']('mouseleave', () => {
        modBtns[i]['style']['transform'] = 'scale(1)'
    })
};
var Stats = document['querySelector']('#stats1');
var newStats = document['createElement']('div');
var currentSplits = document['createElement']('div');
var currentSplitsText = document['createElement']('div');
var cellsContainer = document['createElement']('div');
cellsContainer['style']['display'] = 'flex';
cellsContainer['style']['columnGap'] = '10px';
cellsContainer['style']['border'] = '1px solid blue';
currentSplitsText['innerText'] = 'Cells: ';
newStats['style']['display'] = 'flex';
newStats['style']['columnGap'] = '20px';
newStats['style']['fontSize'] = '20px';
Stats['append'](newStats);
newStats['append'](cellsContainer);
cellsContainer['append'](currentSplitsText);
cellsContainer['append'](currentSplits);
setInterval(() => {
    if (document['querySelector']('label[for=\'Level\']')) {
        var _0xf662x6c = document['querySelector']('label[for=\'Level\']')['nextElementSibling']['firstChild']['children'];

        function _0xf662x6d(_0xf662x6e) {
            return _0xf662x6e['firstChild']['nextElementSibling']['innerText']
        }
        for (let i = 0; i < _0xf662x6c['length']; i++) {
            if (parseInt(_0xf662x6d(_0xf662x6c[i])) > parseInt(document['querySelector']('#account-lvl')['innerText'])) {
                _0xf662x6c[i]['style']['filter'] = 'grayscale(100%) brightness(40%)'
            } else {
                _0xf662x6c[i]['style']['filter'] = ''
            }
        }
    }
}, 1000);
setInterval(() => {
    if (document['querySelector']('#modmenubtn')['hidden'] == true && document['querySelector']('#modmenu')['hidden'] == true) {
        document['querySelector']('#modmenubtn')['hidden'] = ''
    }
}, 1000);
setInterval(() => {
    if (window['settings']['gamemode'] == 'Selfeed') {
        currentSplits['innerText'] = window['stats']['mycells'] + '/64'
    } else {
        currentSplits['innerText'] = window['stats']['mycells'] + '/16'
    }
});
var cribl = ['https://www.snay.io/assets/skins/Mei.png', 'https://www.snay.io/assets/skins/sun.gif', 'https://www.snay.io/assets/skins/pellet1_image.png', 'https://www.snay.io/assets/skins/pellet2_image.png', 'https://www.snay.io/assets/skins/pellet3_image.png', 'https://www.snay.io/assets/skins/pellet_image.png', 'https://www.snay.io/assets/skins/heart.png'];

function setSkinsEvent() {
    const _0xf662x44 = new MutationObserver(function() {
        const _0xf662x45 = document['querySelector']('#profile-btn.fade-in') !== null;
        if (_0xf662x45) {
            setTimeout(() => {
                var _0xf662x71 = document['querySelector']('#account-content')['querySelectorAll']('span')[2]['innerText'];
                for (let i = 0; i < cribl['length']; i++) {
                    var _0xf662x72 = document['createElement']('li');
                    _0xf662x72['classList']['add']('skin');
                    var _0xf662x73 = document['createElement']('span');
                    _0xf662x73['setAttribute']('class', 'skin-wrapper lazy-load-image-background blur lazy-load-image-loaded');
                    _0xf662x73['style'] = 'color: transparent; display: inline-block; height: 150px; width: 150px;';
                    _0xf662x72['appendChild'](_0xf662x73);
                    _0xf662x72['classList']['add']('L4');
                    var _0xf662x74 = document['createElement']('img');
                    _0xf662x74['src'] = cribl[i];
                    _0xf662x74['style']['height'] = '150px';
                    _0xf662x74['style']['width'] = '150px';
                    _0xf662x74['style']['margin'] = '5px';
                    _0xf662x74['classList']['add']('circular');
                    _0xf662x73['append'](_0xf662x74);
                    _0xf662x74['setAttribute']('alt', cribl[i]['split']('.')[cribl[i]['split']('.')['length'] - 2]['split']('/')[cribl[i]['split']('.')[cribl[i]['split']('.')['length'] - 2]['split']('/')['length'] - 1]);
                    if (cribl[i]['split']('.')[cribl[i]['split']('.')['length'] - 2]['split']('/')[cribl[i]['split']('.')[cribl[i]['split']('.')['length'] - 2]['split']('/')['length'] - 1] == 'matter') {
                        _0xf662x74['style']['backgroundColor'] = 'gray'
                    };
                    _0xf662x74['onclick'] = () => {
                        var _0xf662x1e = cribl[i]['split']('.')[cribl[i]['split']('.')['length'] - 2]['split']('/')[cribl[i]['split']('.')[cribl[i]['split']('.')['length'] - 2]['split']('/')['length'] - 1];
                        changeSkin(_0xf662x1e)
                    };
                    document['querySelector']('label[for=\'own\']')['nextElementSibling']['firstChild']['append'](_0xf662x72)
                }
            }, 5000)
        } else {
            if (document['querySelectorAll']('.L4')) {
                document['querySelectorAll']('.L4')['forEach']((_0xf662xd) => {
                    window['settings']['skin'] = '';
                    localStorage['setItem']('settings', localStorage['getItem']('settings')['replace'](window['settings']['skin'], ''));
                    _0xf662xd['remove']()
                })
            }
        }
    });
    const _0xf662x46 = document['querySelector']('#profile-btn');
    if (_0xf662x46) {
        _0xf662x44['observe'](_0xf662x46, {
            attributes: true,
            attributeFilter: ['class']
        })
    } else {
        console['error']('Target element not found.')
    }
}
setSkinsEvent();
setupUI();
setupCustomSkins();
setupModMenu();
createLoginEvent();
loading()
