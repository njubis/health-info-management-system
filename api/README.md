# API
it needs to be standalone service
consumed through a `Service Binding` i.e (cloudflare service bindings) or  REST endpoints

## Must haves
create/delete new client
create/delete new health program
enroll clinet to a program
search a client - by name or id (any unique property)
view client profile

## "would be nice" haves
list clients
list programs
list programs per clients
list clients per program
create/ delete a doc
list doctors
view doctor profile

SECURITY:
  - authenticate users
  - expire session after inactivity
  - encryp user data at rest(cloudflare does this)
  - users can only be created by existing user
