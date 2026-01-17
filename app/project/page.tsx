'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Stack,
    Chip,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';

import { projects } from '@/data/project';

/* ---------- Page ---------- */

export default function ProjectsPage() {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
            {/* Background blobs */}
            <Box sx={blob('#22d3ee', { top: -180, right: -180 })} />
            <Box sx={blob('#a855f7', { bottom: -200, left: -200 })} />

            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ maxWidth: 820, mb: 10 }}>
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
                        Selected projects demonstrating full product ownership,
                        security-first engineering, and real-world problem solving
                        across fintech and consumer platforms.
                    </Typography>
                </Box>

                {/* Projects */}
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} key={project.title}>
                            <ProjectCard {...project} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

/* ---------- Project Card ---------- */

function ProjectCard({
    title,
    description,
    highlights,
    tags,
    image,
    index,
}: {
    title: string;
    description: string;
    highlights: string[];
    tags: string[];
    image?: string;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.45,
                ease: 'easeOut',
                delay: index * 0.05,
            }}
            whileHover={{ scale: 1.015 }}
        >
            <Card
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    transition: '0.25s',
                }}
            >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Grid container spacing={4} alignItems="center">
                        {/* Image */}
                        <Grid item xs={12} md={3}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {/* <Image
                                    src={image || ''}
                                    alt={title}
                                    width={120}
                                    height={120}
                                    style={{
                                        borderRadius: 14,
                                        objectFit: 'cover',
                                    }}
                                /> */}
                            </Box>
                        </Grid>

                        {/* Content */}
                        <Grid item xs={12} md={9}>
                            <Typography variant="h5" fontWeight={700}>
                                {title}
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 2,
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                    maxWidth: 720,
                                }}
                            >
                                {description}
                            </Typography>

                            <Stack spacing={1.4} sx={{ mt: 3 }}>
                                {highlights.map((item, idx) => (
                                    <Typography key={idx} sx={{ color: 'grey.400' }}>
                                        • {item}
                                    </Typography>
                                ))}
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ mt: 3, flexWrap: 'wrap' }}
                            >
                                {tags.map((tag) => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        sx={{ fontWeight: 500 }}
                                    />
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </motion.div>
    );
}

/* ---------- Background Blob ---------- */

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