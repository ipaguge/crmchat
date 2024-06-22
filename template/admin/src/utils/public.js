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

function toBinaryString(str) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    let binaryString = '';
    bytes.forEach(byte => {
        binaryString += byte.toString(2).padStart(8, '0');
    });
    return binaryString;
}

function fromBinaryString(binaryString) {
    const bytes = [];
    for (let i = 0; i < binaryString.length; i += 8) {
        bytes.push(parseInt(binaryString.slice(i, i + 8), 2));
    }
    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(bytes));
}

export function encrypt(str) {
    const binaryString = toBinaryString(str);
    let encryptedBinaryString = '';
    for (let bit of binaryString) {
        encryptedBinaryString += (bit === '0') ? '1' : '0'; // XOR with 1
    }
    return btoa(encryptedBinaryString);
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
    const binaryString = atob(encryptedStr);
    let decryptedBinaryString = '';
    for (let bit of binaryString) {
        decryptedBinaryString += (bit === '0') ? '1' : '0'; // XOR with 1
    }
    return fromBinaryString(decryptedBinaryString);
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
