# ASES Main Site

## Deploying
After pushing to `master`, do the following steps to update the live site:

1. `ssh <sunetid>@myth.stanford.edu`
2. `cd /afs/.ir/group/ases/WWW`
3. `git pull`


N.B: to have permissions to edit this folder on the AFS, make sure you are a member of the pts group ases-admins. 

Current members may add new users to this group by running the command `pts adduser <user_name> ases-admins`. 

You can check for current membership by running `pts membership ases-admins`. 

In the case that the previous ASES team neglected to add you to the pts group properly, please submit a ticket to Stanford ServiceNow with the ticket type 'GET ACCESS TO EDIT EXISTING WEBSITE'.
