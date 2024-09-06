
"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState, ReactNode } from "react";
import {
    ChevronDownIcon,
    SparkleIcon,
    ZapIcon,
    MoveVerticalIcon,
    BotIcon,
    PenIcon,
} from "lucide-react";

interface Submission {
    id: string;
    name: string;
    email: string;
    message: string;
}

interface MainContentProps {
    data: Submission[];
}

const MainContent = ({ data }: MainContentProps) => (
    <div className="flex flex-col">
        <div className="sticky top-0 p-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-muted text-lg">
                        Admin Dashboard <span className="text-muted-foreground">v1.0</span>
                        <ChevronDownIcon className="w-4 h-4 text-muted-foreground" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="max-w-[300px]">
                    <DropdownMenuItem className="items-start gap-2">
                        <SparkleIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
                        <div>
                            <div className="font-medium">User Submissions</div>
                            <div className="text-muted-foreground/80">View and manage user submissions</div>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="items-start gap-2">
                        <ZapIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
                        <div>
                            <div className="font-medium">Analytics</div>
                            <div className="text-muted-foreground/80">View site analytics and user data</div>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
            <div className="overflow-auto border rounded-lg">
                <Table className="w-full">
                    <TableCaption className="p-4 m-0 border-t">
                        {`Showing ${data.length} user submissions`}
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.message}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoveVerticalIcon className="w-4 h-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => handleReply(item.email)}>
                                                Reply
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleMarkAsResolved(item.id)}>
                                                Mark as Resolved
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => handleDelete(item.id)}>
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
);

const handleReply = (email: string) => {
    console.log("Reply to:", email);
    // Implement reply logic here
};

const handleMarkAsResolved = (id: string) => {
    console.log("Marked as resolved:", id);
    // Implement mark as resolved logic here
};

const handleDelete = (id: string) => {
    console.log("Deleted submission:", id);
    // Implement delete logic here
};

interface SidebarProps {
    data: Submission[];
}

const Sidebar = ({ data }: SidebarProps) => (
    <div className="flex-col hidden gap-2 text-foreground bg-background md:flex">
        <div className="sticky top-0 p-2">
            <Button variant="ghost" className="justify-start w-full gap-2 px-2 text-left">
                <div className="flex items-center justify-center rounded-full w-7 h-7">
                    <BotIcon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden text-sm grow text-ellipsis whitespace-nowrap">Admin Dashboard</div>
                <PenIcon className="w-4 h-4" />
            </Button>
        </div>
        <div className="flex-1 overflow-auto">
            <div className="grid gap-1 p-2 text-foreground">
                <div className="px-2 text-xs font-medium text-muted-foreground">Submissions</div>
                {data?.map((item) => (
                    <Link
                        href="#"
                        key={item.id}
                        className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
                        prefetch={false}
                    >
                        {item.name} - {item.email}
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    const [data, setData] = useState<Submission[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('/api/contact');
                if (res.data.data) {
                    const data = res.data.data
                    setData( data);
                }
               
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        getData();
    }, []);

    return (
        <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
            <Sidebar data={data} />
            <MainContent data={data} />
        </div>
    );
};

export default Dashboard;
