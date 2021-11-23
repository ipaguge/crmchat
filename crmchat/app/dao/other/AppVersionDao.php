<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\dao\other;


use app\models\other\AppVersion;
use crmeb\basic\BaseDao;

class AppVersionDao extends BaseDao
{

    protected function setModel(): string
    {
        return AppVersion::class;
    }

    /**
     * @param array $where
     * @param string $field
     * @return mixed
     */
    public function max(array $where = [], string $field = 'versions')
    {
        return $this->search($where)->max($field);
    }
}
