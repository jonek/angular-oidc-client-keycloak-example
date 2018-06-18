FROM jboss/keycloak:4.0.0.Final

ADD keycloak-demo-realm-export.json /opt/jboss/keycloak/

CMD ["-b", "0.0.0.0", \
	"-Dkeycloak.migration.action=import", \
	"-Dkeycloak.migration.provider=singleFile", \
	"-Dkeycloak.migration.file=/opt/jboss/keycloak/keycloak-demo-realm-export.json"]
