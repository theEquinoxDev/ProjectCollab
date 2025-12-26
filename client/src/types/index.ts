export default interface User {
    _id: string;
    name: string; 
    email: string; 
    college: string;
    year: number;
    skills: string[];
    githubLink?: string;
    whatsappNumber: string; 
}

export default interface Project {
    _id: string;
    title: string;
    description: string;
    type: 'hackathon' | 'college' | 'side';
    skillsRequired: string[];
    teamSize: number;
    ownerId: string | {
        _id: string;
        name: string;
        college: string;
    };
    createdAt: string;
    updatedAt: string;
}

export default interface JoinRequest {
    _id: string; 
    projectId: string;
    userId: User;
    message: string;
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: string;
}

export default interface AuthResponse {
    user: User;
    token: string;
}