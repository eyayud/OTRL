export class User {
    constructor(id?: string, userName?: string, fullName?: string, email?: string, tin?: string,
                phoneNumber?: string, roles?: string[], siteCode?: string) {
        this.Id = id;
        this.UserName = userName;
        this.FullName = fullName;
        this.Email = email;
        this.Tin = tin;
        this.PhoneNumber = phoneNumber;
        this.Roles = roles;
        this.SiteCode = siteCode;
    }

    get FriendlyName(): string {
        let name = this.FullName || this.UserName;

        if (this.Tin) {
            name = this.Tin + ' ' + name;
        }

        return name;
    }

    public Id: string;
    public UserName: string;
    public FullName: string;
    public Email: string;
    public Tin: string;
    public SiteCode: string;
    public PhoneNumber: string;
    public IsEnabled: boolean;
    public IsLockedOut: boolean;
    public Roles: string[];
}
