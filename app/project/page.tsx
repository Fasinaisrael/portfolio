'use client';

import Image from 'next/image';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Stack,
    Chip,
    Grid,
} from '@mui/material';

export default function ProjectsPage() {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
            {/* Background blobs */}
            <Box sx={blob('#22d3ee', { top: -180, right: -180 })} />
            <Box sx={blob('#a855f7', { bottom: -200, left: -200 })} />

            <Container maxWidth="lg">
                {/* PAGE HEADER */}
                <Box sx={{ maxWidth: 800, mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 2 }}
                    >
                        Projects
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '1.05rem',
                            color: 'text.secondary',
                            lineHeight: 1.8,
                        }}
                    >
                        Selected projects demonstrating full product ownership, security-first
                        engineering, and real-world problem solving.
                    </Typography>
                </Box>

                {/* PROJECT LIST */}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <ProjectCard
                            title="FastCash"
                            image=""
                            description="A fintech mobile application built from scratch to help users manage income, savings, and investments."
                            highlights={[
                                'End-to-end solo development using React Native & Expo',
                                'Secure onboarding with BVN verification and OTP flows',
                                'Multi-step profile completion with payout account validation',
                                'Income tracking, savings, and investment workflows',
                                'Expo Prebuild for owner testing and OTA updates',
                            ]}
                            tags={['Fintech', 'React Native', 'Expo', 'Security']}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

/* ---------- Project Card ---------- */

function ProjectCard({
    title,
    image,
    description,
    highlights,
    tags,
}: {
    title: string;
    image: string;
    description: string;
    highlights: string[];
    tags: string[];
}) {
    return (
        <Card
            sx={{
                bgcolor: 'background.paper',
                transition: '0.25s',
                '&:hover': { transform: 'translateY(-6px)' },
            }}
        >
            <CardContent>
                <Grid container spacing={4} alignItems="center">
                    {/* IMAGE */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                                src={image}
                                alt={title}
                                width={120}
                                height={120}
                                style={{ borderRadius: 12 }}
                            />
                        </Box>
                    </Grid>

                    {/* CONTENT */}
                    <Grid item xs={12} md={9}>
                        <Typography variant="h5" fontWeight={700}>
                            {title}
                        </Typography>

                        <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.7 }}>
                            {description}
                        </Typography>

                        <Stack spacing={1.5} sx={{ mt: 3 }}>
                            {highlights.map((item, idx) => (
                                <Typography key={idx} sx={{ color: 'grey.400' }}>
                                    • {item}
                                </Typography>
                            ))}
                        </Stack>

                        <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
                            {tags.map((tag) => (
                                <Chip key={tag} label={tag} size="small" />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

/* ---------- styles ---------- */

const blob = (color: string, pos: any) => ({
    position: 'absolute',
    width: 420,
    height: 420,
    bgcolor: color,
    opacity: 0.18,
    filter: 'blur(140px)',
    borderRadius: '50%',
    pointerEvents: 'none',
    ...pos,
});