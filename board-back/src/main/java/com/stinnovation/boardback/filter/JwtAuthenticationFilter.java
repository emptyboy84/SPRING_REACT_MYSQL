package com.stinnovation.boardback.filter;

import java.io.IOException;

import org.apache.catalina.startup.WebAnnotationSet;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.event.AbstractAuthenticationEvent;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.mysql.cj.util.StringUtils;
import com.stinnovation.boardback.provider.JwtProvider;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

/**
 * JwtAuthenticationFilter
 */
@Component
@RequiredArgsConstructor
 public class JwtAuthenticationFilter extends OncePerRequestFilter{
    private final JwtProvider JwtProvider;

    @Override//abstraction methode
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
                try {
                        String token=parseBearerToken(request);

                if(token==null){
                        filterChain.doFilter(request, response);
                        return;
                }
                        String email=JwtProvider.validate(token);
                if(email==null){
                        filterChain.doFilter(request, response);
                        return;
                }

                AbstractAuthenticationToken authenticationToken=
                new UsernamePasswordAuthenticationToken(email,AuthorityUtils.NO_AUTHORITIES);
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContext securityContext=SecurityContextHolder.createEmptyContext();
                securityContext.setAuthentication(authenticationToken);

                SecurityContextHolder.setContext(securityContext);

                
                } catch (Exception exception) {
                        exception.printStackTrace();

                        // TODO: handle exception
                }
               filterChain.doFilter(request, response); 

                
    }
            private String parseBearerToken(HttpServletRequest request){
                String authorization=request.getHeader("Authorization");
                Boolean hasAuthorization=StringUtils.hasText(authorization);
                if(!hasAuthorization)return null;
                boolean isBearer=authorization.startsWith("Bearer");
                if(!isBearer)return null;

                String token=authorization.substring(7);

                return token;

            }


    
}