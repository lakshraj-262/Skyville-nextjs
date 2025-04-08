"use client";
import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Memoize all sub-components to prevent unnecessary re-renders
const Container = memo(({ color, children }) => (
    <div
        className="border-2 border-n-4 rounded-3xl px-9 py-10 shadow-xl"
        style={{
            backgroundColor: color || 'transparent',
            backgroundImage: color
                ? `linear-gradient(to bottom right, ${color}66, ${color}33)`
                : "linear-gradient(to bottom right, #252134, #3F3A52, #252134)"
        }}
    >
        {children}
    </div>
));

const Content = memo(({ children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {children}
    </div>
));

const TextSection = memo(({ title, description }) => (
    <div className="space-y-6">
        <h2 className="text-4xl h2 font-light text-white leading-tight">
            {title}
        </h2>
        <p className="text-slate-400 body-1 text-lg leading-relaxed">
            {description}
        </p>
    </div>
));

const VideoSection = memo(({ src, alt }) => (
    <div className="space-y-6">
        <div className="rounded-xl overflow-hidden bg-black h-50 relative">
            <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                aria-label={alt}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 to-transparent pointer-events-none" />
        </div>
    </div>
));

// Pre-define transform configurations
const scrollAnimationConfig = {
    scale: {
        inputRange: [0, 1],
        outputRange: [0.5, 1]
    },
    opacity: {
        inputRange: [0, 1],
        outputRange: [0.4, 1]
    }
};

const Card = memo(({
    alt,
    title,
    description,
    src,
    color,
}) => {
    const cardRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(
        scrollYProgress, 
        scrollAnimationConfig.scale.inputRange,
        scrollAnimationConfig.scale.outputRange
    );
    
    const opacity = useTransform(
        scrollYProgress,
        scrollAnimationConfig.opacity.inputRange,
        scrollAnimationConfig.opacity.outputRange
    );

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale,
                opacity
            }}
            className="mb-20"
        >
            <Container color={color}>
                <Content>
                    <TextSection
                        title={title}
                        description={description}
                    />
                    <VideoSection
                        src={src}
                        alt={alt}
                    />
                </Content>
            </Container>
        </motion.div>
    );
});

// Add display names for better debugging
Card.displayName = 'Card';
Container.displayName = 'Card.Container';
Content.displayName = 'Card.Content';
TextSection.displayName = 'Card.TextSection';
VideoSection.displayName = 'Card.VideoSection';

export default Card;