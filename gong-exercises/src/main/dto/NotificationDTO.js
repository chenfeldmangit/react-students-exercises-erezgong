export default class NotificationDTO {
    constructor(id, profile, owner, action, object, content){
        this.id = id;
        this.profile = profile;
        this.owner = owner;
        this.action = action;
        this.object = object;
        this.content = content;
    }
}