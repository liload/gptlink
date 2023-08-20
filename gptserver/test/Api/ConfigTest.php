<?php

namespace HyperfTest\Api;

use App\Http\Dto\Config\LoginConfigDto;
use App\Http\Dto\Config\ShareConfigDto;
use App\Http\Dto\Config\WebsiteConfigDto;
use App\Http\Dto\Config\PaymentDto;
use App\Model\Config;
use HyperfTest\LoginTrait;
use HyperfTest\TestCase;
use HyperfTest\TestDto\BaseDto;

/**
 * @internal
 * @coversNothing
 */
class ConfigTest extends TestCase
{
    use LoginTrait;

	public function testWebConfigBasicInfoShow()
	{
        Config::updateOrCreateByDto(new WebsiteConfigDto([]));

		$response = $this->get('/config/basic-info');

        $this->assertApiSuccess($response);

		$response->build(new BaseDto([
			'project' => ['default'],
			'name' => '站点基础配置',
			'category' => '配置相关',
			'params' => [],
			'desc' => '',
			'request' => [],
			'request_except' => [],
			'response' => [
                'name' => '站点名称',
                'icp' => 'icp备案号',
                'web_logo' => '图片 base64',
                'admin_logo' => '图片 base64',
                'user_logo' => '用户默认头像',
            ],
		]));
	}

    public function testWebLoginTypeShow()
    {
        Config::updateOrCreateByDto(new WebsiteConfigDto([]));

        $response = $this->get('/config/login-type');

        $this->assertApiSuccess($response);

        $response->build(new BaseDto([
            'project' => ['default'],
            'name' => '获取登录配置',
            'category' => '配置相关',
            'params' => [],
            'desc' => '',
            'request' => [],
            'request_except' => [],
            'response' => [
                'login_type' => '站点名称',
                'mobile_verify' => 'icp备案号',
            ],
        ]));
    }

    public function testWebConfigPayShow()
    {
        Config::updateOrCreateByDto(new PaymentDto([]));

        $response = $this->get('/config/payment');

        $this->assertApiSuccess($response);

        $response->build(new BaseDto([
            'project' => ['default'],
            'name' => '获取支付配置',
            'category' => '配置相关',
            'params' => [],
            'desc' => '',
            'request' => [],
            'request_except' => [],
            'response' => [
                'channel' => BaseDto::mapDesc('支付渠道', PaymentDto::TYPES),
                'offline' => '线下支付说明',
            ],
        ]));
    }

    public function testWebShareShow()
    {
        Config::updateOrCreateByDto(new ShareConfigDto([]));

        $response = $this->get('/config/share');

        $this->assertApiSuccess($response);

        $response->build(new BaseDto([
            'project' => ['default'],
            'name' => '获取分享配置',
            'category' => '配置相关',
            'params' => [],
            'desc' => '',
            'request' => [],
            'request_except' => [],
            'response' => [
                'title' => '分享标题',
                'desc' => '分享描述',
                'img_url' => '分享到微信的图',
                'share_img' => '分享任务图',
            ],
        ]));
    }

    public function testSalesmanConfigShow()
    {
        Config::updateOrCreateByDto(new ShareConfigDto([]));

        $response = $this->get('/config/salesman');

        $this->assertApiSuccess($response);

        $response->build(new BaseDto([
            'project' => ['default'],
            'name' => '获取分销配置',
            'category' => '配置相关',
            'params' => [],
            'desc' => '',
            'request' => [],
            'request_except' => [],
            'response' => [
                'enable' => '是否开启分销',
                'open' => '是否开放申请',
                'rules' => '分销规则',
            ],
        ]));
    }
}
