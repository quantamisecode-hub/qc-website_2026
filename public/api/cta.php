<?php
/**
 * Quantamise Code - Contact Form Backend (PHP)
 * Replicates the logic of the Python/Flask backend.
 */

// --- CONFIGURATION ---
// In a real environment, these should be in environment variables or a separate config file.
define('SMTP_SERVER', 'quantemisecode.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'no-reply@quantemisecode.com');
define('SMTP_PASS', ''); // User must provide this
define('FOUNDER_EMAIL', 'vidyarthpatel@gmail.com');

// --- CORS HEADERS ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Origin");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// --- INPUT HANDLING ---
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed", "success" => false]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Bad request", "message" => "Request body is required", "success" => false]);
    exit;
}

// --- VALIDATION ---
$errors = [];
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$company = trim($input['company'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($name) || strlen($name) < 2 || strlen($name) > 100) $errors[] = "Valid name is required (2-100 characters).";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "A valid email address is required.";
if (empty($phone) || strlen($phone) < 10 || strlen($phone) > 15) $errors[] = "A valid phone number is required.";
if (empty($message) || strlen($message) < 10 || strlen($message) > 2000) $errors[] = "A message between 10nd 2000 characters is required.";

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["error" => "Validation failed", "message" => implode(" ", $errors), "success" => false]);
    exit;
}

// --- EMAIL TEMPLATES ---
function get_email_styles() {
    return "
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; }
        .header { text-align: center; padding: 30px 0; background-color: #f8f9fa; border-bottom: 3px solid #6366f1; }
        .logo { max-height: 50px; }
        .content { padding: 30px 20px; background-color: #ffffff; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; background-color: #f8f9fa; border-top: 1px solid #eaeaea; }
        .button { display: inline-block; padding: 12px 24px; background-color: #6366f1; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
        .info-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .info-table td { padding: 12px; border-bottom: 1px solid #eee; }
        .info-table td:first-child { font-weight: bold; color: #3A0F67; width: 30%; }
        .highlight { color: #6366f1; font-weight: bold; }
        h1 { color: #3A0F67; margin-bottom: 10px; font-size: 24px; }
        h2 { color: #3A0F67; font-size: 20px; margin-top: 0; }
    </style>";
}

function get_client_email_html($name) {
    $styles = get_email_styles();
    return "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'>{$styles}</head>
    <body>
        <div class='container'>
            <div class='header'><img src='https://www.quantamisecode.com/assets/logo.png' alt='Logo' class='logo'></div>
            <div class='content'>
                <h1>Hello, {$name}! 👋</h1>
                <p>Thank you for reaching out to <span class='highlight'>Quantamise Code</span>.</p>
                <p>Our team will contact you within <strong>24 hours</strong>.</p>
                <div style='text-align: center;'><a href='https://www.quantamisecode.com' class='button text-white'>Visit Our Website</a></div>
            </div>
            <div class='footer'><p>&copy; 2026 Quantamise Code. All rights reserved.</p></div>
        </div>
    </body>
    </html>";
}

function get_founder_email_html($data) {
    $styles = get_email_styles();
    $company = $data['company'] ?: "N/A";
    return "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'>{$styles}</head>
    <body>
        <div class='container'>
            <div class='header'><h2>🔥 New Lead Received</h2></div>
            <div class='content'>
                <p>A new lead submitted the contact form.</p>
                <table class='info-table'>
                    <tr><td>Name</td><td>{$data['name']}</td></tr>
                    <tr><td>Email</td><td>{$data['email']}</td></tr>
                    <tr><td>Phone</td><td>{$data['phone']}</td></tr>
                    <tr><td>Company</td><td>{$company}</td></tr>
                </table>
                <div style='background:#f9f9f9;padding:15px;border-left:4px solid #6366f1;margin-top:20px;'>
                    <p style='font-weight:bold;'>Message</p>
                    <p>{$data['message']}</p>
                </div>
            </div>
            <div class='footer'><p>Quantamise Code Internal Notification</p></div>
        </div>
    </body>
    </html>";
}

// --- SMTP SEND FUNCTION (using PHPMailer logic simplified or mail() if SMTP is not available) ---
// Note: For robust SMTP, we'd usually use PHPMailer. Here's a direct SMTP implementation or mail() fallback.
function send_email($to, $subject, $message) {
    $header = "From: Quantamise Code <" . SMTP_USER . ">\r\n";
    $header .= "Reply-To: " . SMTP_USER . "\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Attempting to send using PHP mail() - requires server configuration
    // If SMTP is needed, a more complex socket-based implementation would be required
    // or the user should include PHPMailer.
    return mail($to, $subject, $message, $header);
}

// --- EXECUTION ---
$client_html = get_client_email_html($name);
$founder_html = get_founder_email_html([
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "company" => $company,
    "message" => $message
]);

$client_sent = send_email($email, "Thank you for contacting Quantamise Code 🚀", $client_html);
$founder_sent = send_email(FOUNDER_EMAIL, "New Lead: {$name} 🔥", $founder_html);

if ($client_sent || $founder_sent) {
    http_response_code(200);
    echo json_encode([
        "message" => "Thank you for contacting us! We'll get back to you within 24 hours.",
        "success" => true
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "error" => "Internal server error",
        "message" => "Failed to send emails. Please contact us directly.",
        "success" => false
    ]);
}
