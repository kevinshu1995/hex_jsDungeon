/**
 *  * 正常只會用到 statusHandler( param = { STATUS: status })
 *      * STATUS => ['clear', 'success', 'error']
 *          * 目前只用到 'success', 'error'
 */
export default function messageModel (){

    const _statusElements = {
        error: {
            el: document.getElementById('errorText'),
        },
        success: {
            el: document.getElementById('successText'),
        },
        requesting: {
            el: document.getElementById('requestingText'),
        },
        backDrop: {
            el: document.getElementById('messageBackdrop'),
        },
    }
    const _allStatus = Object.keys(_statusElements)
    const _targetClass = (target) =>  _statusElements[target].el.classList

    this.clearHandler = () => {
        _allStatus.forEach((_status) => {
            if (!_targetClass(_status).contains('hidden'))
                _targetClass(_status).add('hidden')
        })
        _statusElements.backDrop.el.style.display = 'none'
    }

    this.successHandler = () => {
        const vm = this
        setTimeout(() => {
            vm.statusHandler({ STATUS: 'clear'})
        }, 3000)
    }

    this.defaultHandler = (STATUS) => {
        _allStatus.forEach((_status) => {
            if (_status === STATUS) {
                _targetClass(_status).remove('hidden')
            } else if (!_targetClass(_status).contains('hidden')) {
                _targetClass(_status).add('hidden')
            }
        })
    }

    this.statusHandler = (params = { STATUS }) => {
        if (params.STATUS === 'clear') {
            this.clearHandler()
        }else{
            // * 不是 clear 就都要觸發 defaultHandler
            this.defaultHandler(params.STATUS)
        }
    
        if (params.STATUS === 'success') {
            this.successHandler()
        }
    }
}