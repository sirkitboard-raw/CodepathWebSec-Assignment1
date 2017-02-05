<?php

namespace App;

class ValidationFunctions
{
    public static function validateFirstName($first_name) {
        if(strlen($first_name) > 255 || strlen($first_name) < 2) {
            return false;
        }
        return preg_match('/^[a-zA-Z-,.\']+$/', $first_name);
    }

    public static function validateLastName($last_name) {
        if(strlen($last_name) > 255 || strlen($last_name) < 2) {
            return false;
        }
        return preg_match('/^[a-zA-Z-,.\']+$/', $last_name);
    }

    public static function validateUsername($username) {
        if(strlen($username) > 255 || strlen($username) < 8) {
            return false;
        }
        return preg_match('/^[a-zA-Z0-9_]+$/', $username);
    }

    public static function validateEmail($email) {
        if(strlen($email) > 255) {
            return false;
        }
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
}
