
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import Link from '@mui/material/Link';

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

interface SidebarListItem {
    title: string;
    link: string;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const list1 = useMemo<SidebarListItem[]>(() => [
        { title: 'LNReader', link: '/website'},
        { title: 'Github', link: 'https://github.com/LNReader/lnreader' },
    ], []);
    const list2 = useMemo<SidebarListItem[]>(() => [
        { title: 'Terms of service', link: '/website/tos' },
        { title: 'Privacy Policy', link: '/website/privacy-policy' },
    ], []);
    const content = () => (
        <Box
            sx={{ width: 160 }}
        >
            <List>
                {list1.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <Link href={item.link} underline='none' color={theme.palette.text.primary} style={{ flex: 1 }}>
                            <ListItemButton>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {list2.map((item) => (
                    <Link href={item.link} underline='none' color={theme.palette.text.primary} style={{flex: 1}}>
                        <ListItemButton>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: 160 }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 160,
                        background: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '60px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {content()}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
