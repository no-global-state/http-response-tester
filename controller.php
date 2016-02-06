<?php

// Don't execute on non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die('Direct call is not allowed');
}

require(__DIR__.'/vendor/autoload.php');

use Krystal\Http\Client\Curl;
use Krystal\Http\Client\CurlHttplCrawler;
use Krystal\Http\Response\StatusGenerator;

// Step #1 - Get request parameters
$url = $_POST['config']['url'];
$method = $_POST['config']['method'];
$parameters = array();

// Add parameters if present
if (!empty($_POST['parameters'])) {
    foreach ($_POST['parameters'] as $parameter) {
        $parameters[$parameter['name']] = $parameter['value'];
    }
}

// Step #2 - Handle request
$client = new CurlHttplCrawler(new Curl());
$data = $client->request($method, $url, $parameters);

$code = $client->getInfo(CURLINFO_HTTP_CODE);

// Stop, if HTTP response isn't successful
if (!(200 <= $code && 300 > $code)) {
    $generator = new StatusGenerator();
    die($generator->generate($code));
}

if ($data !== false) {
    $response = json_decode($data, true);
} else {
    $response = $client->getErrors();
}

print_r($response);