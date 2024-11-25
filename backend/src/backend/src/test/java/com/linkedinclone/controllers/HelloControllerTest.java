package com.linkedinclone.controllers; 
import org.junit.jupiter.api.Test; 
import org.springframework.boot.test.context.SpringBootTest; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.boot.web.server.LocalServerPort; 
import org.springframework.test.web.client.TestRestTemplate; 
import org.springframework.http.ResponseEntity; 
import static org.junit.jupiter.api.Assertions.assertEquals; 
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) 
public class HelloControllerTest { 
@LocalServerPort 
private int port; 
@Autowired 
private TestRestTemplate restTemplate; 
@Test 
public void testHello() { 
String url = "http://localhost:" + port + "/hello"; 
assertEquals("Hello, LinkedHub!", response.getBody()); 
} 
} 
