'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { motion } from 'framer-motion';

const skills = [
    {
        title: 'State Management & Architecture',
        description:
            'Centralized state using Redux Toolkit, typed selectors, modular reducers, and debug tooling for predictable app state.',
    },
    {
        title: 'Secure API Handling',
        description:
            'Centralized API wrapper, token-based authentication, automatic session management, and robust error handling.',
    },
    {
        title: 'Device & Environment Security',
        description:
            'Checks for compromised devices, initializes device info globally, handles platform differences, and enforces security-first policies.',
    },
    {
        title: 'Global App Configuration',
        description:
            'Singleton pattern for global variables, graceful handling of optional values, and consistent configuration for APIs and analytics.',
    },
    {
        title: 'Code Maintainability & Best Practices',
        description:
            'Modular folder structure, reusable utilities, typed interfaces, defensive coding, and clear separation of concerns.',
    },
    {
        title: 'UX, Performance & Stability',
        description:
            'Safe area handling, gesture support, status bar control, smooth app initialization, and OTA updates for scalable deployment.',
    },
    {
        title: 'Security-First Development',
        description:
            'VAPT mindset, secure storage, session validation, password & input validation, and defensive API access control.',
    },
    {
        title: 'Scalable & Maintainable Project Structure',
        description:
            'Clear folder separation, reusable constants, async initialization, and consistent responsive design for long-term maintainability.',
    },
    {
        title: 'Observability & Debugging',
        description:
            'Centralized logging, debug flags for APIs, Reactotron integration, and structured error handling for production stability.',
    },
];

export default function SeniorDeveloperSkillsPage() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
            {/* Background blobs */}
            <Box sx={blob('#22d3ee', { top: -200, left: -200 })} />
            <Box sx={blob('#a855f7', { bottom: -200, right: -200 })} />

            <Container maxWidth="lg">
                {/* Page header */}
                <Box sx={{ maxWidth: 800, mb: 10, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                        Things a Senior Developer Must Know
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        Key principles, practices, and patterns I prioritize to build stable, scalable, and secure products.
                    </Typography>
                </Box>

                {/* Cards */}
                <Grid container spacing={4}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} md={6} key={skill.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        bgcolor: 'background.paper',
                                        transition: '0.25s',
                                        boxShadow: 3,
                                        p: 2,
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={700}>
                                            {skill.title}
                                        </Typography>
                                        <Typography sx={{ mt: 1.5, color: 'grey.500', lineHeight: 1.6 }}>
                                            {skill.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
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