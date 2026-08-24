package com.angular.project.controller;

import com.angular.project.model.Hello;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.client.RestTestClient;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.MockitoAnnotations.openMocks;

class HelloControllerTest {

    private RestTestClient client;

    @BeforeEach
    void setup() {
        openMocks(this);
        client = RestTestClient.bindToController(new HelloController()).build();
    }

    @Test
    void hello_ShouldSucceed() {
        Hello result = client.get()
                .uri("/hello")
                .exchange()
                .expectStatus().isOk()
                .expectBody(Hello.class)
                .returnResult()
                .getResponseBody();

        assertNotNull(result);
        assertEquals("hello world", result.getTitle());
    }
}
