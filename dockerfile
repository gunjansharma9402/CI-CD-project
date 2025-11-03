FROM :nginx:alpine
COPy dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx" , "-g" , "deamon off;" ]


