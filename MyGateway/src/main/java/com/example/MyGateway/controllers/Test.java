package com.example.MyGateway.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
public class Test {

    @GetMapping("/")
    String someEndpoint() {
        return "Some page";
    }

}
