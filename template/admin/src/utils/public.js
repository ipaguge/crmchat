// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2021 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

import { tableDelApi } from '@/api/common'


function stringToBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
        let binaryChar = str.charCodeAt(i).toString(2).padStart(8, '0');
        binary += binaryChar;
    }
    return binary;
}

function binaryToString(binary) {
    let str = '';
    for (let i = 0; i < binary.length; i += 8) {
        let byte = binary.slice(i, i + 8);
        str += String.fromCharCode(parseInt(byte, 2));
    }
    return str;
}

export function encrypt(str) {
    let binaryStr = stringToBinary(str);
    let encryptedBinary = '';
    for (let i = 0; i < binaryStr.length; i++) {
        let bit = binaryStr[i];
        let encryptedBit = (parseInt(bit) ^ 1).toString(); // simple XOR with 1
        encryptedBinary += encryptedBit;
    }
    let encryptedStr = binaryToString(encryptedBinary);
    return btoa(encryptedStr);
}

function isBase64(str) {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}

export function decrypt(encryptedStr) {
    if (!isBase64(encryptedStr)) {
        return encryptedStr;
    }

    try {
        let binaryStr = stringToBinary(atob(encryptedStr));
        let decryptedBinary = '';
        for (let i = 0; i < binaryStr.length; i++) {
            let bit = binaryStr[i];
            let decryptedBit = (parseInt(bit) ^ 1).toString(); // simple XOR with 1
            decryptedBinary += decryptedBit;
        }
        return binaryToString(decryptedBinary);
    } catch (e) {
        // Handle the error if needed
    }

    return encryptedStr;
}

export function modalSure (delfromData) {
    return new Promise((resolve, reject) => {
        let content = ''
        if (delfromData.info !== undefined) {
            content = `<p>${delfromData.title}</p><p>${delfromData.info}</p>`
        } else {
            content = `<p>确定要${delfromData.title}吗？</p><p>${delfromData.title}后将无法恢复，请谨慎操作！</p>`
        }
        this.$Modal.confirm({
            title: delfromData.title,
            content: content,
            loading: true,
            onOk: () => {
                setTimeout(() => {
                    this.$Modal.remove()
                    if (delfromData.success) {
                        delfromData.success.then(async res => {
                            resolve(res)
                        }).catch(res => {
                            reject(res)
                        })
                    } else {
                        tableDelApi(delfromData).then(async res => {
                            resolve(res)
                        }).catch(res => {
                            reject(res)
                        })
                    }
                }, 300)
            },
            onCancel: () => {
                this.$Message.info('取消成功')
            }
        })
    })
}
