package com.skilldistillery.reviewit.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin({ "*", "http://localhost/" })
@Controller
public class RoutingController {
//	@GetMapping(path = { "/", "/{name:^(?!api|css|js|index|html).+}/**" })
//	public String routeAllToSPA(HttpServletRequest req, HttpServletResponse res) {
//		String path = req.getRequestURI();
//		String redirectTo = "redirect:/index.html";
//		if (path != "/") {
//			redirectTo = (String) redirectTo + "?path=" + path;
//		}
//		return redirectTo;
//	}
}